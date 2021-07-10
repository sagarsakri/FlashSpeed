import React from 'react'

const TryAgain = ({words,
    characters,
    wpm}) => {
    return (
        <div className="tryagain">
            <h1>Test Result</h1>
            <div className="resultContainer">
                <p>
                    <b>characters: </b> {characters}
                </p>
                <p>
                    <b>Words: </b> {words}
                </p>
                <p>
                    <b>wpm: </b> {wpm} wpm
                </p>
            </div>
        </div>
    );
};

export default TryAgain
