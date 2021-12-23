import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

    return (
        <div>
            <nav className="">
                <Link to='../landingPage.jsx'>
                    CookBook
                </Link>
                <div className="menu-icon" onClick={ handleClick }>
                    <FontAwesomeIcon className='' icon={ click ? faTimes : faBars }/>
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link className="nav-link link" to="/home">Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
