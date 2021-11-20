import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Login extends Component {
    render() { 
        return (
        <div>
            <h2>Login</h2>

            <label>Username</label>
            <input type="text" name="username"></input>

            <label>Password</label>
            <input type="password" name="password"></input>

            <button className="register">Login</button>

            <Link className="nav-link active" to="/home">Not a user? Register here.</Link>
        </div>
        );
    }
}
 
export default Login;