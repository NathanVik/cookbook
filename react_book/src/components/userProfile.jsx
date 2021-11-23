import React, { Component } from 'react';
import UserService from '../services/userService';



class UserProfile extends React.Component {
    state = { 
        userid: '',
        user: [],
     }

    render() { 
        return (
        
        <div>PUT USER PROFILE INFO HERE</div>

        )
    }

    async componentDidMount() {
        let service = new UserService(); // Gets User info for selected User
        let data = await service.getUserDetail(1); // PLACEHOLDER ID - MUST CHANGE TO SELECTED PROFILE ID

    this.setState({ user: data })
    }

}
 