import React, { Component } from 'react';
import "./createRecipe.css"

class CreateRecipe extends React.Component {
    state = {
        selectedFile: null,

        recipeTitle: "",
        recipeIngredients: "",
        recipeInstructions: "",

    }
    render() { 
        return (
            <div className="create-container">
                <form className="create-recipe-form">
                    <h2>Create a New Recipe</h2>

                    <div>
                        <label>Recipe Title</label>
                        <input type="text" name="recipeTitle" value={this.state.recipeTitle} ></input>
                    </div>
                    <div>
                        <label>Ingredients</label>
                        <textarea type="" name="recipeIngredients" value={this.state.recipeIngredients}></textarea>
                    </div>
                    <div>
                        <label>Instructions</label>
                        <textarea type="" name="recipeInstructions" value={this.state.recipeInstructions}></textarea>
                    </div>
                    <div>
                        <label>Upload a picture!</label>
                        <input type="file" onChange={this.fileSelectedHandler}></input>
                    </div>

                    <button onClick={this.formSendHandler}>Post Recipe</button>
                </form>
            </div>
        );
    }

    fileSelectedhandler = event => {
        console.log(event);
        this.setState({
            selectedFile: event.target.files[0] // This ensures that it targets the first selected file 
        })
    }
    formSendHandler = () => {
        // UPLOAD THE FILES HERE WITH API
    }

}
 
export default CreateRecipe;