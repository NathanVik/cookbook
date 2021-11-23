import React, { Component } from 'react';

class UserRegistration extends Component {
    render() { 
        return (
            <div>
                <h2>Create a CookBook Account</h2>

                <label>Email</label>
                <input type="email" name="email"></input>
    
                <label>Username</label>
                <input type="text" name="username"></input>
    
                <label>Password</label>
                <input type="password" name="password"></input>
    
                <button className="register">Create Account</button>
            </div>
            );
    }
}
 
export default UserRegistration;