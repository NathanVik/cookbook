import React, { Component } from 'react';
import RecipeService from '../services/recipeService';
const ServerUrl = "http://127.0.0.1:5000";

class ViewRecipe extends React.Component {
    state = {
        recipe: {},
    }
    
    render() { 
        return <div>
                    Show Image <img src={ ServerUrl + '/static/img/' +  this.state.recipe.filename } />
                    Show Title {this.state.recipe.title}
                    {/* Show Ingredients {this.state.recipe.fromDetail.ingredients}
                    Show Directions {this.state.recipe.fromDetail.directions} */}

        </div>;
    }

    async componentDidMount() {
        console.log("component mounted")
        let service = new RecipeService()
        let myrecipe = await service.getRecipeDetail(this.props.match.params.recipeID) //this recipe ID - by props from "recipe" collection ID - pass prop in link from recipe card
        this.setState({ recipe: myrecipe })
        console.log(this.state.recipe)
        console.log("recipe set as state")
    }
}
 
export default ViewRecipe;