import React from 'react'
import './Challenge.css'
import TestContainer from './TestContainer';
const Challenge= () => {
    return (
        <div className="challenge-section">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a speed test now!
            </h1>
            <TestContainer words={4} characters={14} wpm={40} />
        </div>
    );
};

export default Challenge
