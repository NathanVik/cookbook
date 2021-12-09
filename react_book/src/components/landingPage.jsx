import React, { Component } from 'react';
import RecipeCard from './recipeCard';
import RecipeService from '../services/recipeService';

class LandingPage extends Component {
    state = {
        posts: [],
      };


    render() {

        let recipesToDisplay = this.state.posts;


        return (
            <div>
                <h1>Top Recipes of The Week: {this.state.posts.length}</h1>

                <div className="recipeCard-list">
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