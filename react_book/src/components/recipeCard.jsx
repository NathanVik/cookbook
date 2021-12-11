import React, { Component } from 'react';
import './recipeCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class RecipeCard extends React.Component {
    render() { 
        return (
        <div className="recipeCard">
            <button><FontAwesomeIcon className="like-icon" icon={faHeart} /></button>
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