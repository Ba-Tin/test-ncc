import React from 'react';
import icon1 from '../../images/css-icon 1.jpg'
import icon2 from '../../images/html-icon 1.jpg'
import icon3 from '../../images/url-icon 1.jpg'
import './style.css';

const Lorem = () => {

    return (
        <div className='lorem'>
            <div className='lorem-item'>
                <h2>Lorem ipsum dolor sit amet</h2>
                <div>
                    <img src={icon1} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                </div>

            </div>
            <div className='lorem-item'>
                <h2>Lorem ipsum dolor sit amet</h2>
                <img src={icon2} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
            </div> <div className='lorem-item'>
                <h2>Lorem ipsum dolor sit amet</h2>
                <img src={icon3} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
            </div>
        </div>
    );
};

export default Lorem;