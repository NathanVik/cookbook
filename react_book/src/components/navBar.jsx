import React, { Component } from 'react';
import "./navBar.css";
import { Link } from "react-router-dom";
import siteContext from '../contexts/siteContext';

class NavBar extends Component {  
        static contextType = siteContext;
        state = {
                };
       

       
        render() { 
        return (
            <nav className="navbar">
                <div className="navigation">
                    <Link className="navbar-brand link" to="/">CookBook</Link>

                    <ul className="menu">
                        <li>
                            <Link className="nav-link link" to="/home">Home</Link>
                        </li>
                        <li className="right-side">
                            <Link className="nav-link link" to="/myprofile">My Profile</Link>
                        </li>
                        <li className="right-side">
                            <Link className="nav-link link" to="/create-recipe">Post a New Recipe</Link>
                        </li>
   
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;