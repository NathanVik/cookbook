import React, { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import siteContext, { updateLogin } from "../contexts/siteContext";
// import axios from "axios";

class Login extends Component {
  static contextType = siteContext;
  state = {
    username: "",
    password: "",
    errorMessage: false,
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loginCall = async () => {
    const username = this.state.username;
    const password = this.state.password;

    let user = { username, password };
    let response = await this.context.handleLogin(user);
    
    if (response.status === 200) {
      localStorage.setItem("user", JSON.stringify(response.data));
      // this.context.updateLogin();
      this.props.history.push("/myprofile");
    } else if (response.status === 404) {
    this.setState({ errorMessage: true });
    setTimeout(() => {
      this.setState({ errorMessage: false });
    }, 3500);

    
  };
  }

  render() {
    return (
      <div className="login-container center-width">
        <div className="login-card card">
          <h2>CookBook Login</h2>

          {this.state.errorMessage ? (
            <div className="error-message">
              Invalid Login! Please try again.
            </div>
          ) : null}



          <div className="label-input">
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="label-input">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="label-input">
            <button className="btn-login btn" onClick={this.loginCall}>
              Login
            </button>
            <Link className="reg-link" to="/register">
              Not a user? Create account here.
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
