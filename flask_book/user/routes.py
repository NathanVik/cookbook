from flask import Flask
from server import app
from user.login_manager import User

@app.route('/user/signup', methods=['GET'])
def signup():
    return User().singup()