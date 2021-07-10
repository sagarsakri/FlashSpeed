import React from 'react'
import './Landing.css'
import hero from './images/hero.png'
import Typewriter from 'typewriter-effect';

const Landing = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-up-right" className="landing-left" >
                <h1 className="landing-header">Can you type...</h1>
                <div className="typewriter-container">
                    <Typewriter
                        options={{
                            strings: ['Fast?', 'Correct?','Quick?'],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
            </div>
            <div data-aos="fade-up-left" className="landing-right">
                <img src={hero} className="hero-image" alt="hero" />
            </div>
        </div>
    );
}

export default Landing
