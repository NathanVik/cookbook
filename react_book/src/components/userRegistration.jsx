import React, { Component } from 'react';
import "./userRegistration.css";
import axios from "axios";
const ServerUrl = "http://127.0.0.1:5000";

class UserRegistration extends Component {
    state = { 
        username: '',
        email: '',
        password: '',
        password2: '',
        selectedFile: null,
    };
    

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        };
    handleFileChange = (event) => {                                         // sets selected file to the state
        this.setState({ selectedFile: event.target.files[0] });
        };
    handleSubmit = async () => {
        let myForm = new FormData();
        myForm.append('username', this.state.username)
        myForm.append('email', this.state.email)
        myForm.append('password', this.state.password)
        myForm.append('profile', this.state.selectedFile)
        
        // const username = this.state.username
        // const password = this.state.password
        // const email = this.state.email
        // const file = this.state.selectedFile
        
        

        console.log(myForm)
        let response = await axios.post(ServerUrl + '/api/users', myForm, { 'Content-Type': 'multipart/form-data' });
        // CREATE ERROR MESSAGES ETC
        console.log(response)
    };


    
    
    render() { 
        return (
            <div className="reg-container">
                <div className="reg-card">
                    <h2>Create a CookBook Account</h2>

                    <div className="label-input">
                        <label>Email</label>
                        <input type="email" name="email" onChange={this.handleInputChange}></input>
                    </div>
                    <div className="label-input">
                        <label>Username</label>
                        <input type="text" name="username" onChange={this.handleInputChange}></input>
                    </div>
                    <div className="label-input">
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleInputChange}></input>
                    </div>
                    <div className="label-input">
                        <label>Re-type Password</label>
                        <input type="password" name="password2" onChange={this.handleInputChange}></input>
                    </div>
                    <div className="label-input">
                        <label>Upload a Profile Picture</label>
                        <input type="file" name="file" onChange={this.handleFileChange}></input>
                    </div>
                    <button className="register btn-reg" onClick={this.handleSubmit}>Create Account</button>
                </div>
            </div>
            );
    }
}
 
export default UserRegistration;