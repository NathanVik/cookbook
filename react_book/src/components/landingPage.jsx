import React, { Component } from 'react';
import './landingPage.css'
import RecipeCard from './recipeCard';
import RecipeService from '../services/recipeService';


class LandingPage extends Component {
    state = {
        posts: [],
    };
    
    loginRedirect = () => {
        this.props.history.push("/login");
    }
    registerRedirect = () => {
        this.props.history.push("/register");
    }
    render() {

        let recipesToDisplay = this.state.posts;


        return (
            <div className="landing-page ">
                <div className="image-container">
                    <img className="cookbook-cover" src={`${process.env.PUBLIC_URL}/assets/images/sweet-peppers.jpg`} alt="splash-image"/>
                    <h2 className="cover-text card">Welcome to the CookBook</h2>
                </div>
                <div className="message card center-width">
                    <button className="btn" onClick={this.loginRedirect}>Log In</button>
                    <button className="btn" onClick={this.registerRedirect}>Register New User</button>
                </div>
                <div className="message card center-width">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/chef-hat1.png`} alt="chef-hat"/>
                    <p>Take a look at some of our Top Recipes of the Week!</p>
                    <p>Count: {this.state.posts.length}</p>
                </div>

                <div className="recipeCard-list center-width">
                    {recipesToDisplay.map((obj) => (
                        <RecipeCard key={obj._id} data={obj}></RecipeCard>
                    ))}
                </div>
            </div>
        );
    }

    async componentDidMount() {
        let service = new RecipeService();
        let data = await service.getRecentRecipes();


        this.setState({ posts: data })
    }
}

export default LandingPage;