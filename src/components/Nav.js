import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to ="/" className="nav-item">
                    <li>Home</li>
                </Link>
                <Link to="/about" className="nav-item">
                    <li>About</li>
                </Link>
                <Link to ="/login" className="nav-item">
                    <li>Login</li>
                </Link>
                <Link to="/register" className="nav-item">
                    <li>Register</li>
                </Link>


            
            </ul>

        </nav>
    )
}

export default Nav;