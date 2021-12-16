import React, { Component } from 'react';
import './recipeCard.css';
import UserService from '../services/userService';
import RecipeService from '../services/recipeService';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class RecipeCard extends React.Component {
    state = {
        users: [],
    }

    async componentDidMount() {
        let service1 = new userService();
        let author = 
    }

    render() { 
        return (
        <div className="recipeCard card">
            <span className="card-header">
                <button className="btn-icon"><FontAwesomeIcon className="like-icon" icon={faHeart} /></button>
            </span>
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