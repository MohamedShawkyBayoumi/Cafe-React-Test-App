import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h3>
                <Link to='/'>CAFE REACT</Link>
            </h3>
        </header>
    )
}

export default Header;