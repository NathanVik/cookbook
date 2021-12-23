import React, { Component } from 'react';
import axios from "axios";

import "./createRecipe.css"
import siteContext from '../contexts/siteContext';
import { Redirect } from 'react-router-dom';
const ServerUrl = "http://127.0.0.1:5000";
class CreateRecipe extends React.Component {
    static contextType = siteContext;
    state = {
        selectedFile: null,

        recipeTitle: "",
        recipeIngredients: "",
        recipeInstructions: "",

    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };
    handleFileSelect = (event) => {
        this.setState({ selectedFile: event.target.files[0] // This ensures that it targets the first selected file 
            })
    };
    handleSubmit = async () => {
        console.log(this.state.recipeIngredients)
        
        let myForm = new FormData();
        let myuser = JSON.parse(localStorage.getItem('user')); // retrieves JSON string from local storage
        myForm.append('user_id', myuser['_id']);
        myForm.append('title', this.state.recipeTitle);
        myForm.append('ingredients', this.state.recipeIngredients);
        myForm.append('instructions', this.state.recipeInstructions);
        myForm.append('picture', this.state.selectedFile);
        console.log(myForm);
        let response = await axios.post(ServerUrl + '/api/recipe/new', myForm, { 'Content-Type': 'multipart/form-data' });
        // CREATE ERROR MESSAGES ETC
        console.log(response);
    };

    render() { 
        return (
            <div className="create-container center-width">
                <div className="create-recipe-form card">
                    <h2>Create a New Recipe</h2>

                    <div className="label-input">
                        <label>Recipe Title</label>
                        <input type="text" name="recipeTitle" onChange={this.handleInputChange} ></input>
                    </div>
                    <div className="label-input">
                        <label>Ingredients</label>
                        <textarea type="text" name="recipeIngredients" onChange={this.handleInputChange}></textarea>
                    </div>
                    <div className="label-input">
                        <label>Instructions</label>
                        <textarea type="text" name="recipeInstructions" onChange={this.handleInputChange}></textarea>
                    </div>
                    <div className="label-input">
                        <label>Upload a picture!</label>
                        <input type="file" onChange={this.handleFileSelect}></input>
                    </div>

                    <button className="btn" onClick={this.handleSubmit}>Post Recipe</button>
                </div>
            </div>
        );
    }
    
    componentDidMount() {           // check if there is a user logged into local storage, if not then redirect to login page
        if (this.context.isLoggedIn = false) {
            return <Redirect to='/login' />
        }
    }

}
 
export default CreateRecipe;