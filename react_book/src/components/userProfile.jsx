import React, { Component } from 'react';
import UserService from '../services/userService';



class UserProfile extends React.Component {
    state = { 
        userid: '',
        user: [],
     }

    render() { 
        return (
        
        <div>PUT USER PROFILE INFO HERE

            <div>{ this.state.user.username }</div>

        </div>

        )
    }

    async componentDidMount() {
        let service = new UserService(); // Gets User info for selected User
        let myuser = JSON.parse(localStorage.getItem('user')); // retrieves JSON string from local storage
        let data = await service.getUserDetail(myuser['_id']); // Takes _id from the local storage user and passes to server

    this.setState({ user: data })
    }

}


export default UserProfile;