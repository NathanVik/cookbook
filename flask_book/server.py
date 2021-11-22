from flask import Flask, abort, request
from config import db, parse_json
from pymongo import cursor, results
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


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



#### GET USER PROFILE INFO ###
@app.route("/api/users/<id>") #Use ID 
def get_user_profile(id):
    user = db.users.find_one({"_id": id})
    if not user:
        abort(404)
    return parse_json(user)

### Create new User ###
@app.route('/api/users', methods=['POST'])
def save_user():
    user = request.get_json() #gets the dictionary 
    #validations
    if not "username" in user:
        return parse_json({"error":"Username is required", "success":False })
    
    if not "email" in user:
        return parse_json({"error":"email is required", "success":False })
    
    if not "password" in user:
        return parse_json({"error":"password is required", "success":False })

    db.users.insert_one(user)
    return parse_json(user)
