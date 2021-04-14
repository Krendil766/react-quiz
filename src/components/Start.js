import React from 'react';

const Start = ({onQuizStart}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h1>Start the Quiz</h1>
                <p>Good luck!</p>
                <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
            </div>
        </div>
    )
}
export default Start;