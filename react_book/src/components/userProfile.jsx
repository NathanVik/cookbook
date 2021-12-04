import React, { Component } from 'react';
import UserService from '../services/userService';
import RecipeService from '../services/recipeService';
import RecipeCard from './recipeCard';

class UserProfile extends React.Component {
    state = { 
        user: [],
        recipes: [],
    }

    render() { 
        let itemsToDisplay = this.state.recipes;

        return (
        
        <div>PUT USER PROFILE INFO HERE

            <div>{ this.state.user.username }</div>
            <div>{ itemsToDisplay.map( obj => <RecipeCard key={obj._id} data={obj}></RecipeCard> ) }</div>
        </div>

        )
    }

    async componentDidMount() {
        let service1 = new UserService(); // Gets User info for selected User
        let myuser = JSON.parse(localStorage.getItem('user')); // retrieves JSON string from local storage
        let data = await service1.getUserDetail(myuser['_id']); // Takes _id from the local storage user and passes to server
        
        let service2 = new RecipeService();
        let myrecipes = await service2.getUserRecipes(myuser['_id']) // server call to retrieve all recipes where user_id is the logged in user


    this.setState({ user: data, recipes:myrecipes })
    }

}


export default UserProfile;