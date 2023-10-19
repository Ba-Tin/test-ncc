import React from 'react';
import './style.css';
import logo from '../../images/logoNCC 1.jpg'
import Menu from '../../components/Menu';
import About from '../../components/About';
import Lorem from '../../components/Lorem';
import Footer from '../../components/Footer';
const Main = () => {
    ;
    return (
        <div className='main'>
            <Menu />

            <div className='content'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <About />
                <Lorem />
                <div>
                    <Footer />
                </div>
            </div>
        </div>

    );
};

export default Main;