import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

import key from './key.json';

/**
 * TODO
 * - figure out an api key to render the map
 * - go over the website again to find route displaying
 * https://tomchentw.github.io/react-google-maps/
 */

export default class RouteMap extends React.Component {

  state = {
    points: [],
  }

  render() {
    const points = (this.props.points ? this.props.points : []);
    const MyMapComp = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 40.7677773, lng:  -73.9718324}}
      >
        {props.points.map((marker, index) => (
          <Marker
            position={{ lat: marker.lat, lng: marker.lng }}
            key={index}
          />
        ))}
      </GoogleMap>
    ));

    return (
      <div className="routeMapContainer">
        <MyMapComp
          isMarkerShown
          points={points}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key.key}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}