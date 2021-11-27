import React, { Component } from 'react';
import RecipeCard from './recipeCard';

class LandingPage extends Component {
    render() { 
        return (
            <div>
                <h1>Top Recipes of The Week</h1>
                <div className="recipeCard-list">
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>

                </div>
            </div>
        );
    }
}
 
export default LandingPage;