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

        def is_active(self):
            # True, as all users are active.
            return True

        def get_id(self):
            # Return the email address to satisfy Flask-Login's requirements.
            return self.email

        def is_authenticated(self):
            # Return True if the user is authenticated.
            return self.authenticated

        def is_anonymous(self):
            # False, as anonymous users aren't supported.
            return False

        return jsonify(user), 200