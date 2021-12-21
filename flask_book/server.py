import re
from bson.objectid import ObjectId
from flask import Flask, abort, request, flash, redirect
from config import db, parse_json
import pymongo
import os
from pymongo import cursor, results
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename
from io import StringIO



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

@app.route('/api/recipetest')
def get_recipes():
    cursor = db.recipes.find({})
    recipes = []
    for recipe in cursor:
        recipes.append(recipe)
    
    return parse_json(recipes)

@app.route('/api/detailtest')
def get_details():
    cursor = db.details.find({})
    details = []
    for detail in cursor:
        details.append(detail)
    
    return parse_json(details)


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
@cross_origin()
def save_user():
    user = request.form.to_dict() #gets the form data
    #validations
    if not "username" in user:
        return parse_json({"error":"Username is required", "success":False })
    
    if not "email" in user:
        return parse_json({"error":"email is required", "success":False })
    
    if not "password" in user:
        return parse_json({"error":"password is required", "success":False })

    #### ADD PROFILE PICTURE
    if 'profile' not in request.files:
            flash('No file part')
            return redirect(request.url)
    file = request.files['profile']
        
    if file and allowed_file(file.filename):
            filename = str(ObjectId())
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            
    elif file.filename is None:
            file = open('./static/img/chef.jpg', 'rb')
            filename = str(ObjectId())
            
    user['profilepic'] = filename
    print(user)
    db.users.insert_one(user)
    response = parse_json(user)
    return response

### CREATE NEW RECIPE ###

@app.route('/api/recipe/new', methods=['POST'])
@cross_origin()
def create_recipe():   
    recipeform = request.form.to_dict()
     
    if 'picture' not in request.files:
            flash('No file part')
            return redirect(request.url)
    file = request.files['picture']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
    if file.filename == '':
            flash('No selected file')

    if file and allowed_file(file.filename):
            filename = str(ObjectId())
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

    recipe_id = str(ObjectId())
    recipe = {
        '_id': recipe_id,
        'title': recipeform['title'],
        'user_id': recipeform['user_id'],
        'filename': filename,
    }
    detail = {
        'ingredients': recipeform['ingredients'],
        'directions': recipeform['directions'],
        'recipe_id': recipe_id,
    }
    db.recipes.insert_one(recipe)
    db.details.insert_one(detail)
    return recipe, detail

### Get Recipe Details
@app.route('/api/recipe/<id>')
@cross_origin()
def get_recipe_detail(id):
    result = []
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
        },
        {
            '$lookup': {
                'from': "details",
                'localField': "_id",
                'foreignField': "recipe_id",
                'as': "fromDetail"
            }
        }
    ])
    for recipe in recipes:
        if recipe["_id"] == ObjectId(id):
            result.append(recipe)
    return parse_json(result)




### GET USER PROFILE INFO ###
@app.route("/api/user/<id>") #Use ID 
def get_user_profile(id):
    user = db.users.find_one({"_id": ObjectId(id)})
    if not user:
        abort(404)
    return parse_json(user)

## Get User's Recipe List
@app.route('/api/user/<id>/recipes')
@cross_origin()
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
        if recipe["user_id"] == ObjectId(id):
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
        if recipe["user_id"] == ObjectId(id):
            results.append(recipe)
    return parse_json(results)



### Landing Page Recipe List ###
@app.route('/api/recipecards/recent')
@cross_origin()
def get_recent_recipes():
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
        results.append(recipe)
    return parse_json(results)

if __name__ == "__main__":
    app.run(debug=True)

