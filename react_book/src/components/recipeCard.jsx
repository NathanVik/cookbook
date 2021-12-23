import React, { Component } from 'react';
import './recipeCard.css';
import { Link } from "react-router-dom";

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
            <img src="#"/>
            <div className="card-info">
                <Link to={ '/recipe/' + this.props.data._id }><h2>{ this.props.data.title }</h2></Link>
                <Link to={ '/profile/' + this.props.data.user_id }><h4>{ this.props.data.fromUsers.username }</h4></Link>
            </div>
        </div>
        );
    }
}

export default RecipeCard;