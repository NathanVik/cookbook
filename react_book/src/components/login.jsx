import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
const ServerUrl = "http://127.0.0.1:5000";

class Login extends Component {
    state = { 
        username: '',
        password: '',
     }
    
    render() { 
        return (
        <div>
            <h2>Login</h2>

            <label>Username</label>
            <input type="text" name="username" onChange={this.handleInputChange}></input>

            <label>Password</label>
            <input type="password" name="password" onChange={this.handleInputChange}></input>

            <button className="register" onClick={ this.handleLogin }>Login</button>

            <Link className="nav-link" to="/register">Not a user? Create account here.</Link>
        </div>
        );
    }

handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    };
handleLogin = () => {
    let user = { username, password };
    // send user to server
    response = await axios.post(ServerUrl + '/api/user/login', user);
    //set the state of the user and store in local
    setUser(response.data)
    localStorage.setItem('user', response.data)   
    }

}
 
export default Login;