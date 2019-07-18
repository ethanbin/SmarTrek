import requests
import googlemaps
import json
import re
import getKey


def bytesIO_to_obj(bytesIO):
    return json.loads(bytesIO.read().decode('UTF-8'))


def get_api_result(start, destination, mode=None):
    gmaps = googlemaps.Client(key=getKey.googleKey())
    result = gmaps.directions(start, destination, mode=mode, alternatives=True)
    return result


def get_route_points(result):
    points_list = []
    first_point = result['legs'][0]['start_location']
    first_point['dist'] = 0
    points_list.append(first_point)
    steps = result['legs'][0]['steps']

    for step in steps:
        end = step['end_location']
        end['dist'] = step['distance']['value']
        points_list.append(end)

    return points_list


def get_accidents(points_list):
    accidents_per_points = []
    for point in points_list:
        lat = point['lat']
        lng = point['lng']
        dist = point['dist']
        url = 'https://data.cityofnewyork.us/resource/qiz3-axqb.json?$where=within_circle(location, {}, {}, {})'.format(
            lat, lng, dist / 2)
        acc_in_point = json.loads(requests.get(url).text)
        accidents_per_points.append(acc_in_point)
    return accidents_per_points


def score_walking(accidents_per_points):
    count = 0
    for point_acc in accidents_per_points:
        if len(point_acc) == 0:
            pass
        else:
            for acc in point_acc:
                if int(acc['number_of_pedestrians_injured']) > 0 or \
                        int(acc['number_of_pedestrians_killed']) > 0:
                    count += 0.2
                    count += int(acc['number_of_pedestrians_injured']) * 0.5
                    count += int(acc['number_of_pedestrians_killed'])
    return count


def score_cycling(accidents_per_points):
    count = 0
    for point_acc in accidents_per_points:
        if len(point_acc) == 0:
            pass
        else:
            for acc in point_acc:
                if int(acc['number_of_cyclist_injured']) > 0 or \
                        int(acc['number_of_cyclist_killed']) > 0:
                    count += 0.2
                    count += int(acc['number_of_cyclist_injured']) * 0.5
                    count += int(acc['number_of_cyclist_killed'])
    return count


def score_driving(accidents_per_points):
    count = 0
    for point_acc in accidents_per_points:
        if len(point_acc) == 0:
            pass
        else:
            for acc in point_acc:
                count += 0.2
                count += int(acc['number_of_persons_injured']) * 0.5
                count += int(acc['number_of_persons_killed'])
    return count


def calc_score(mode, accidents_per_points):
    score = 0
    if mode == 'driving' or mode == 'transit':
        score = score_driving(accidents_per_points)
    elif mode == 'cycling':
        score = score_cycling(accidents_per_points)
    elif mode == 'walking':
        score = score_walking(accidents_per_points)
    return score


def rank_routes(mode_dict):
    for mode in mode_dict:
        scores = []
        for route in mode_dict[mode]:
            scores.append(route['score'])
        best = min(scores)
        if best == 0:
            best = 1
        for route in mode_dict[mode]:
            route['percent'] = round(((route['score'] / best) - 1) * 100, 2)
            if route['percent'] < 0:
                route['percent'] = 0
    return mode_dict


def main(start, destination):
    modes = ['walking', 'driving', 'transit', 'bicycling']
    mode_dict = {}
    clean = re.compile('<.*?>')

    for mode in modes:
        result = get_api_result(start, destination, mode=mode)

        mode_dict[mode] = []
        for i, route in enumerate(result, 1):

            time = route['legs'][0]['duration']['text']
            distance = route['legs'][0]['distance']['text']
            directions = []
            for turn in route['legs'][0]['steps']:
                instructions = re.sub(clean, '', turn['html_instructions'])
                directions.append((instructions, turn['distance']['text']))

            points_list = get_route_points(route)

            accidents_per_points = get_accidents(points_list)
            score = calc_score(mode, accidents_per_points)
            mode_dict[mode].append(
                {'route': i, 'start': points_list[0], 'end':
                    points_list[-1], 'score': score, 'distance': distance,
                 'time': time, 'instructions': directions})
    return rank_routes(mode_dict)


if __name__ == '__main__':
    start = 'College of staten island'
    destination = 'wagner college, staten island'
    start = 'college of staten island'
    destination = '17 amsterdam place, staten island, new york'
    print(main(start, destination))
