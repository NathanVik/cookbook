import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import RecipeService from '../services/recipeService';
import './viewRecipe.css'
const ServerUrl = "http://127.0.0.1:5000";

class ViewRecipe extends React.Component {
    state = {
        recipe: {
                    _id: null,
                    filename: null,
                    user_id: null,
                    title: null,
                    fromDetail: {
                        _id: null,
                        ingredients: null,
                        instructions: null,
                        recipe_id: null,
                    },
                    fromUsers: {
                        _id: null,
                        email: null,
                        password: null,
                        profilepic: null,
                        username: null,
                        }
                    },
    }
    
    render() { 
        return <div className='view-recipe'>

<div className='recipe-image'> 
    <img src={ ServerUrl + '/static/img/' +  this.state.recipe.filename } />
</div>
<div className='recipe-details'>
        <h1>{this.state.recipe.title}</h1>
        <h3>Ingredients</h3>
        <p>{this.state.recipe.fromDetail.ingredients}</p>
        <h3>Instructions</h3>
        <p>{this.state.recipe.fromDetail.instructions}</p>

</div>


        </div>;
    }

    async componentDidMount() {
        console.log("component mounted")
        let service = new RecipeService()
        let myrecipe = await service.getRecipeDetail(this.props.match.params.recipeID) //this recipe ID - by props from "recipe" collection ID - pass prop in link from recipe card
        if (myrecipe != null && myrecipe.length>0) {
            this.setState({ recipe: myrecipe[0] })
            console.log(this.state.recipe)
            }
        else {
            console.log('error: recipe record not found')
            return <Redirect to='/home' />
        }
            
        console.log(this.state.recipe)
    }
}
 
export default ViewRecipe;