import React, { Component } from 'react';
import UserService from '../services/userService';
import RecipeService from '../services/recipeService';


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
        let service1 = new UserService(); // Gets User info for selected User
        let myuser = JSON.parse(localStorage.getItem('user')); // retrieves JSON string from local storage
        let data = await service1.getUserDetail(myuser['_id']); // Takes _id from the local storage user and passes to server
        
        let service2 = new RecipeService();
        let myrecipes = service2.getUserRecipes(myuser['_id'])


    this.setState({ user: data })
    }

}


export default UserProfile;