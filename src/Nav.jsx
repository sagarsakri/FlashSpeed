import React from 'react';
import './Nav.css';
import logo from './images/f1.png'
const Nav = ()  => {
    return (
        <div className="navContainer">
            <div className="navLeft">
                <img className="logo" src={logo} alt="logo" />
                <p className="flash-logo">FlashSpeed</p>
            </div>
            <div className="navright">
                <a target="blank"
                    className="myprofile"
                    href="https://www.linkedin.com/in/sagarsakri/"
                    rel="noreferrer"
                >
                    Creator
                </a>
            </div>
        </div>
    );
}

export default Nav
