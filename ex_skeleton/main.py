import os
from bottle import (get, post, redirect, response,request, route, run, static_file,
                    template)

import json

# the decorator
def enable_cors(fn):
    def _enable_cors(*args, **kwargs):
        # set CORS headers
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'

        if request.method != 'OPTIONS':
            # actual request; reply with the actual response
            return fn(*args, **kwargs)

    return _enable_cors


# Static Routes

@get("/js/<filepath:re:.*\.js>")
def js(filepath):
    return static_file(filepath, root="./js")

@get("/css/<filepath:re:.*\.css>")
def css(filepath):
    return static_file(filepath, root="./css")

@get("/images/<filepath:re:.*\.(jpg|png|gif|ico|svg)>")
def img(filepath):
    return static_file(filepath, root="./images")

@route('/')
def index():
    return template("index.html")

@route('/sendLocations/<info>' , method=['OPTIONS', 'POST'])
@enable_cors
def index(info):
    # print(request.body)
    return request.body

@route('/test' , method=['OPTIONS', 'GET'])
@enable_cors
def test():
    return '{"msg": "test success!"}'

run(host='localhost', port=os.environ.get('PORT', 5000))
