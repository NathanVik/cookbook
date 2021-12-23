import React, { Component } from 'react';
import './userProfile.css';
import UserService from '../services/userService';
import RecipeService from '../services/recipeService';
import RecipeCard from './recipeCard';
import siteContext from '../contexts/siteContext';
import { Redirect } from 'react-router-dom';
const ServerUrl = "http://127.0.0.1:5000";

class ViewUserProfile extends React.Component {
    static contextType = siteContext;
    state = { 
        user: [],
        recipes: [],
        picture: [],
        likes: [],
    }

    routeRedirect = () => {
        this.props.history.push("/create-recipe");
    }

    render() { 
        let itemsToDisplay = this.state.recipes;

        return (
            <div className="user-profile center-width">

                <section className="user-container-card card">
                    <div className="">
                        <img className="profile-picture" src={ ServerUrl + '/static/img/' +  this.state.picture.filename } alt="user-image"></img>
                        <h2>{ this.state.user.username }</h2>
                    </div>
                    <div>
                        <p>Recipes Posted: #{this.state.recipes.length}</p>
                    </div>
                    <div>
                        <p>Recipes Liked: #{this.state.likes.length}</p>
                    </div>
                </section>

                <section className="posts-container">
                    <div>
                        { itemsToDisplay.map( obj => <RecipeCard key={obj._id} data={obj}></RecipeCard> ) }
                    </div>
                </section>

            </div>
        )
    }

    async componentDidMount() {

            let service1 = new UserService(); // Gets User info for selected User
            let thisuser = this.props.match.params.userID; // gets user ID link params
            let userdata = await service1.getUserDetail(thisuser); // Takes _id from the local storage user and passes to server
            
            let service2 = new RecipeService();
            let recipedata = await service2.getUserRecipes(thisuser) // server call to retrieve all recipes where user_id is the logged in user
    
            this.setState({ user: userdata, recipes: recipedata })
        }
     
    
}


export default ViewUserProfile;