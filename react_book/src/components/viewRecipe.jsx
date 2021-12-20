import React, { Component } from 'react';
import RecipeService from '../services/recipeService';


class ViewRecipe extends React.Component {

    
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
        recipe = await service.getRecipeDetail(this.props.data._id) //this recipe ID - by props from "recipe" collection ID - pass prop in link from recipe card
    }
}
 
export default ViewRecipe;