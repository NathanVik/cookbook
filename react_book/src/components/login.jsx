import React, { Component } from 'react';
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
const ServerUrl = "http://127.0.0.1:5000";

class Login extends Component {
    state = { 
        username: '',
        password: '',
     }
    
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        };

    handleLogin = async () => {
        const username = this.state.username
        const password = this.state.password

        let user = { username, password };
        // send user to server
        let response = await axios.post(ServerUrl + '/api/user/login', user);
        //set the state of the user and store in local
        localStorage.setItem('user', response.data)   
        }


    render() { 
     
        return (
        <div className="login-card">
            <h2>Login</h2>
            
            <div>
                <label>Username</label>
                <input type="text" name="username" onChange={this.handleInputChange}></input>
            </div>

            
                <label>Password</label>
                <input type="password" name="password" onChange={this.handleInputChange}></input>

                <button className="register" onClick={ this.handleLogin }>Login</button>
                <Link className="nav-link" to="/register">Not a user? Create account here.</Link>
        </div>
        );
    }

}
 
export default Login;