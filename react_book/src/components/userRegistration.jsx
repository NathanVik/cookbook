import React, { Component } from 'react';
import "./userRegistration.css";
import axios from "axios";
const ServerUrl = 'http://127.0.0.1:5000';

class UserRegistration extends Component {
    state = { 
        username: '',
        email: '',
        password: '',
        password2: '',
        selectedFile: '../../public/assets/images/chef.jpg',
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
        
        
        for (var value of myForm.values()) {
            console.log(value)
            console.log(typeof value)
        }

        const username = this.state.username;
        const password = this.state.password;

        let user = { username, password };
        let response = await axios.post(ServerUrl + '/api/users', myForm, { 'Content-Type': 'multipart/form-data' });
        
        if (response.status === 200) {
            localStorage.setItem("user", JSON.stringify(response.data));
            this.props.history.push("/myprofile");
        }

        console.log(response)
    };


    
    
    render() { 
        return (
            <div className="reg-container center-width">
                <div className="reg-card card">
                    <h2>Create a CookBook Account</h2>

                    <div className="label-input">
                        <label>Email</label>
                        <input type="email" name="email" onChange={this.handleInputChange} required></input>
                    </div>
                    <div className="label-input">
                        <label>Username</label>
                        <input type="text" name="username" onChange={this.handleInputChange} required></input>
                    </div>
                    <div className="label-input">
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleInputChange} required></input>
                    </div>
                    <div className="label-input">
                        <label>Re-type Password</label>
                        <input type="password" name="password2" onChange={this.handleInputChange} required></input>
                    </div>
                    <div className="label-input">
                        <label>Upload a Profile Picture</label>
                        <input type="file" name="file" onChange={this.handleFileChange}></input>
                    </div>
                    <button className="register btn-reg btn" onClick={this.handleSubmit}>Create Account</button>
                </div>
            </div>
            );
    }
}
 
export default UserRegistration;