import React, { Component } from 'react';


class CreateRecipe extends React.Component {
    state = {
        selectedFile: null,

    }
    render() { 
        return <div>
            <form>
            
            <label>Recipe Title</label>
            <input type="text"></input>

            <label>Ingredients</label>
            <textarea></textarea>

            <label>Directions</label>
            <textarea></textarea>

            <label>Upload a picture!</label>
            <input type="file" onChange={this.fileSelectedHandler}></input>
            </form>
            <button onClick={this.formSendHandler}>Post Recipe</button>

        </div>;
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