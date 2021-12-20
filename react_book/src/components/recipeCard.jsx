import React, { Component } from 'react';
import './recipeCard.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class RecipeCard extends React.Component {
    state = {
        users: [],
    }

    render() { 
        return (
        <div className="recipeCard card">
            <span className="card-header">
                <button className="btn-icon"><FontAwesomeIcon className="like-icon" icon={faHeart} /></button>
            </span>
            <img src="#">Test</img>
            <div className="card-info">
                <h2>{ this.props.data.title }</h2>
                <h4>{ this.props.data.fromUsers.username }</h4>
            </div>
        </div>
        );
    }
}

export default RecipeCard;