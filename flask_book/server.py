from flask import Flask, abort, request
from config import db, parse_json
from pymongo import cursor, results
from flask_cors import CORS
from flask_login import LoginManager
from werkzeug.utils import secure_filename
from dotenv import load_dotenv


app = Flask(__name__)
CORS(app)
login_manager = LoginManager(app)
load_dotenv() 


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



### GET USER PROFILE INFO ###
@app.route("/api/user/<id>") #Use ID 
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

    #### ADD PROFILE PICTURE UPLOAD FUNCTION -- RUN AN upload_file()

    db.users.insert_one(user)
    return parse_json(user)



### SignUp Testing ###
from user import routes



if __name__ == "__main__":
    app.run(debug=True)