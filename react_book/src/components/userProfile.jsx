import React, { Component } from 'react';

class UserProfile extends Component {
    render() { 
        return (
            <div>
                <h1>Username Account</h1>
                <div className="user">
                    <h3>User account info</h3>
                </div>
                <div className="user-recipes">
                    <h3>List of User Recipes</h3>
                </div>


            </div>
        );
    }
}
 
export default UserProfile;