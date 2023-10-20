import React, { useState } from 'react';
import './style.css';

function Menu() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <>
            <div className='menu-container'>
                <ul className={`menu ${clicked ? 'show' : ''}`} >
                    <li>Home</li>
                    <li>Servies</li>
                    <li>News</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <div id="mobile" onClick={handleClick}>
                    <i
                        id="bar"
                        className={clicked ? 'fas fa-times' : 'fas fa-bars'}
                        onClick={handleClick}
                    ></i>
                </div>
            </div>

        </>
    );
}

export default Menu;