import React, { Component } from 'react';
import RecipeService from '../services/recipeService';


class ViewRecipe extends React.Component {
    state = {
        recipe: [],
    }
    
    render() { 
        return <div>
                    Show Image
                    Show Title
                    Show Ingredients
                    Show Directions

        </div>;
    }

    async componentDidMount() {
        let service = new RecipeService()
        let myrecipe = await service.getRecipeDetail(this.props.match.params.recipeID) //this recipe ID - by props from "recipe" collection ID - pass prop in link from recipe card
        this.setState({ recipe: myrecipe })
        console.log(this.state.recipe)
    }
}
 
export default ViewRecipe;