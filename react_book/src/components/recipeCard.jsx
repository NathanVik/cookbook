import React, { Component } from 'react';
import './recipeCard.css';

class RecipeCard extends React.Component {
    render() { 
        return (
        <div className="recipeCard">
            <img src="#"></img>
            <div className="card-info">
                <h2>Card Recipe Title</h2>
                <h4>Author username</h4>
            </div>


        </div>
        );
    }
}
 
export default RecipeCard;