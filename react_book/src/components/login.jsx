import React, { Component } from 'react';
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
const ServerUrl = "http://127.0.0.1:5000";

class Login extends Component {
    state = { 
        username: '',
        password: '',
        errorMessage: false,
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
        localStorage.setItem('user', JSON.stringify(response.data))
        
        // Redirect
        let errorMessage = this.state.errorMessage
        if (response.status === 200) {
            this.props.history.push("/")
        } else if (response.status === 404 ) {
            this.setState({errorMessage: true})
            setTimeout(() => {
                this.setState({errorMessage: false});
            }, 3500 );
        }
        

        }


    render() {
        return (
            <div className="login-container">
                <div className="login-card">
                    <h2>CookBook Login</h2>
                    
                    { this.state.errorMessage ? <div className="error-message">Invalid Login! Please try again.</div> : null }
                    <div className="label-input">
                        <label>Username</label>
                        <input type="text" name="username" onChange={this.handleInputChange}></input>
                    </div>
                    <div className="label-input">
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleInputChange}></input>
                    </div>
                    <div className="label-input">
                        <button className="btn-login" onClick={ this.handleLogin }>Login</button>
                        <Link className="reg-link" to="/register">Not a user? Create account here.</Link>
                    </div>
                </div>
            </div>
        );
    }

}
 
export default Login;