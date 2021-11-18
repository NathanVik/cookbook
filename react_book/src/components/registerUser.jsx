import React, { Component } from 'react';

class RegisterUser extends Component {
    render() { 
        return (
            <div>
                <h2>Login</h2>
    
                <label>Username</label>
                <input type="text" name="username"></input>
    
                <label>Password</label>
                <input type="password" name="password"></input>
    
                <button className="register">Login</button>
            </div>
            );
    }
}
 
export default RegisterUser;