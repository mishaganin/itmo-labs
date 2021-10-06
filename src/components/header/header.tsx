import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <header>
            <h1>ITMO Lab</h1>
            <nav>
                <Link to="/">Labs</Link>
                <Link to="/">Post</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    )
}

export default Header;