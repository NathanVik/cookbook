from flask import Flask, jsonify
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user

### USER MODEL ###
class User:

    def singup(self):

        user = {
            "_id": "",
            "username": "",
            "email": "",
            "password": ""
        }

        return jsonify(user), 200