import React from 'react';
import './TestContainer.css';
import TryAgain from './TryAgain';
const TestContainer = ({
    words,
    characters,
    wpm
}) => {
    return (
        <div className="test-container">
            <div className="try-again">
                <h1>Try again container</h1>
                <TryAgain words={words} characters={characters} wpm={wpm} />
            </div>
        </div>
    )
}

export default TestContainer
