import React, { Component } from 'react';
import "./navBar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() { 
        return (
            <nav>
                <div>
                    <Link className="navbar-brand" to="/">CookBook</Link>

                    <ul>
                        <li>
                            <Link className="nav-link" to="/home">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;