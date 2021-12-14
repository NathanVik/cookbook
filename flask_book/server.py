from flask import Flask, abort, request, flash, redirect
from config import db, parse_json
import pymongo
import os
from pymongo import cursor, results
from flask_cors import CORS
from werkzeug.utils import secure_filename
import uuid


app = Flask(__name__)

CORS(app, resources = {
    "/api/*": {
        "origins": "*"
    }
})



UPLOAD_FOLDER = './static/img'
ALLOWED_EXTENSIONS = set(['jpg', 'jpeg', 'png', 'gif'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SECRET_KEY'] = 'sdojgbnsdjkgnjlsd' ### UPDATE IN FUTURE FOR DEPLOYMENT


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

### ROUTE USED TO CREATE INITIAL FLASK APP ###
@app.route("/")
def hello_world():
    return "<h1>Hello, World!</h1>"


@app.route('/api/usertest')
def get_users():
    cursor = db.users.find({})
    users = []
    for user in cursor:
        users.append(user)

    return parse_json(users)

@app.route('/api/user/login', methods=['POST'])
def user_login():
    user = request.get_json(force=True) 
    profile = db.users.find_one( {"username": user["username"]} )

    if profile is not None:
        if profile["username"] == user["username"]:
            if profile["password"] == user["password"]:
                return parse_json(profile)
            else:
                abort(404)
        else:
            abort(404)
    else:
        abort(404)


### Create new User ###
@app.route('/api/users', methods=['POST'])
def save_user():
    user = request.form.to_dict() #gets the form data
    #validations
    # if not "username" in user:
    #     return parse_json({"error":"Username is required", "success":False })
    
    # if not "email" in user:
    #     return parse_json({"error":"email is required", "success":False })
    
    # if not "password" in user:
    #     return parse_json({"error":"password is required", "success":False })

    #### ADD PROFILE PICTURE UPLOAD FUNCTION -- RUN AN upload_file()
    if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
    
    file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
    if file.filename == '':
            flash('No selected file')

    if file and allowed_file(file.filename):
            filename = uuid.uuid4().hex
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            
    user['profilepic'] = filename
    print(user)
    db.users.insert_one(user)
    response = parse_json(user)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


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
    results = []
    recipes = db.recipes.aggregate([
        {
            '$lookup': {
                'from': "users",
                'localField': "user_id",
                'foreignField': "_id",
                'as': "fromUsers"
            }
        }, {
            '$unwind': '$fromUsers'
        }

    ])
    for recipe in recipes:
        if recipe["user_id"] == id:
            results.append(recipe)
    return parse_json(results)



@app.route("/api/test/<id>") #TESTING API FOR DATA
def test_data(id):
    results = []
    recipes = db.recipes.aggregate([
        {
            '$lookup': {
                'from': "users",
                'localField': "user_id",
                'foreignField': "_id",
                'as': "fromUsers"
            }
        }, {
            '$unwind': '$fromUsers'
        }

    ])
    for recipe in recipes:
        if recipe["user_id"] == id:
            results.append(recipe)
    return parse_json(results)



### Landing Page Recipe List ###
@app.route('/api/recipecards/recent')
def get_recent_recipes():
    cursor = db.recipes.find({}).limit(6)
    recipes = []
    for recipe in cursor:
        recipes.append(recipe)

    return parse_json(recipes)

if __name__ == "__main__":
    app.run(debug=True)

