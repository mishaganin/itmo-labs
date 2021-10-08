import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <header>
            <h1><Link to="/">ITMO Lab</Link></h1>
            <nav>
                <Link to="/labs">Labs</Link>
                <Link to="/post">Post</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    )
}

export default Header;