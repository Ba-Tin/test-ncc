import React, { useState } from 'react';
import './style.css';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className='menu'>

            {menuOpen && (
                <ul>
                    <button onClick={toggleMenu} className="menu-button">
                        Toggle Menu
                    </button>
                    <li>Home</li>
                    <li>Servies</li>
                    <li>News</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            )}
        </div>
    );
};

export default Menu;