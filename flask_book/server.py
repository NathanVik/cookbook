from flask import Flask, abort
from config import db, parse_json
from pymongo import cursor, results
from flask_cors import CORS
from 

app = Flask(__name__)
CORS(app)

login_manager = LoginManager()

### ROUTE USED TO CREATE INITIAL FLASK APP ###
@app.route("/")
def hello_world():
    return "<h1>Hello, World!</h1>"


@app.route('/api/users')
def get_users():
    cursor = db.users.find({})
    users = []
    for user in cursor:
        users.append(user)

    return parse_json(users)


### GET USER PROFILE INFO ###
@app.route("/api/users/<id>") #Use ID 
def get_user_profile(id):
    user = db.users.find_one({"_id": id})
    if not user:
        abort(404)
    return parse_json(user)
