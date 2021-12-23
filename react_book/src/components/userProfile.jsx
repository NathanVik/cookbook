import React, { Component } from 'react';
import './userProfile.css';
import UserService from '../services/userService';
import RecipeService from '../services/recipeService';
import RecipeCard from './recipeCard';
import siteContext from '../contexts/siteContext';
import { Redirect } from 'react-router-dom';
const ServerUrl = "http://127.0.0.1:5000";

class UserProfile extends React.Component {
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
                        <img className="profile-picture" src={ ServerUrl + '/static/img/' +  this.state.picture.filename } alt="user-image"/>
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
                    <div className="user-recipe-manager card">
                        <button className="btn" onClick={this.routeRedirect}>Create</button>
                        <button className="btn">Delete</button>
                    </div>
                    <div>
                        { itemsToDisplay.map( obj => <RecipeCard key={obj._id} data={obj}></RecipeCard> ) }
                    </div>
                </section>

            </div>
        )
    }

    async componentDidMount() {
        if (this.context.isLoggedIn = false) {
            return <Redirect to='/login' />
        }
        else {
            let service1 = new UserService(); // Gets User info for selected User
            let myuser = JSON.parse(localStorage.getItem('user')); // retrieves JSON string from local storage
            let data = await service1.getUserDetail(myuser['_id']); // Takes _id from the local storage user and passes to server
            
            let service2 = new RecipeService();
            let myrecipes = await service2.getUserRecipes(myuser['_id']) // server call to retrieve all recipes where user_id is the logged in user
    
            this.setState({ user: data, recipes:myrecipes })
        }
        
        // let picture = await service1.getUserDetail(myuser['profilepic']);
        
        // if (Array.isArray(picture) && picture.length) {
        //     this.setState({ picture: picture })
        // } else {
        //     this.setState({ picture: `${process.env.PUBLIC_URL}/assets/images/chef.jpg`})
        // }
    }
}


export default UserProfile;