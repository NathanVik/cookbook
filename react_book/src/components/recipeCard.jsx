import React, { Component } from 'react';
import './recipeCard.css';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const ServerUrl = "http://127.0.0.1:5000";
class RecipeCard extends React.Component {
    state = {
        users: [],
    }

    render() { 
        return (
        <div className="recipeCard card">
            {/* <span className="card-header">
                <button className="btn-icon"><FontAwesomeIcon className="like-icon" icon={faHeart} /></button>
            </span> */}
            <img src={ ServerUrl + '/static/img/' +  this.props.data.filename }/>
            <div className="card-info">
                <Link className="link recipe-link" to={ '/recipe/' + this.props.data._id }><h2>{ this.props.data.title }</h2></Link>
                <Link className="link recipe-link" to={ '/profile/' + this.props.data.user_id }><h4>{ this.props.data.fromUsers.username }</h4></Link>
            </div>
        </div>
        );
    }
}

export default RecipeCard;