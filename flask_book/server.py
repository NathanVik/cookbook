from flask import Flask, abort, request
from config import db, parse_json
from pymongo import cursor, results
from flask_cors import CORS
from werkzeug.utils import secure_filename



app = Flask(__name__)
CORS(app)



UPLOAD_FOLDER = './static/img'
ALLOWED_EXTENSIONS = set(['jpg', 'jpeg', 'png', 'gif'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

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

@app.route('/api/user/login', methods=['POST'])
def user_login():
    user = request.get_json() 
    profile = db.users.find_one( {"username": user["username"]} )
    if profile["password"] == user["password"]:
        return parse_json(profile)
    else:
        return parse_json({"error":"Username of password Incorrect", "success":False })
    



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

    #### ADD PROFILE PICTURE UPLOAD FUNCTION -- RUN AN upload_file()

    db.users.insert_one(user)
    return parse_json(user)


### GET USER PROFILE INFO ###
@app.route("/api/user/<id>") #Use ID 
def get_user_profile(id):
    user = db.users.find_one({"_id": id})
    if not user:
        abort(404)
    return parse_json(user)

## Get User's Recipe List
@app.route('/api/user/<id>/recipes')
def get_user_recipes(id):
    cursor = db.recipes.find({'user_id': id})
    recipes = []
    for recipe in cursor:
        recipes.append(recipe)
    return parse_json(recipes)




if __name__ == "__main__":
    app.run(debug=True)

