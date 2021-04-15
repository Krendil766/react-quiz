import React, { useState, useEffect } from 'react';
import {formatTime} from '../utils';


const End = ({ results, data, onReset, onAnswersCheck, time, userName, userSurname }) => {
    const [correctAnswers, setcorrectAnswers] = useState(0);
    useEffect(() => {
        let correct = 0;
        results.forEach((item, i) => {
            if (item.a === data[i].answer) {
                correct++;
                setcorrectAnswers(correct)
            }
        })
    },[setcorrectAnswers])
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="title is-2">You're results</h3>
                <h3 className="title is-3">{`${userName} ${userSurname}`}</h3>

                <p>{correctAnswers} of {data.length}</p>
                <p><strong>{Math.floor((correctAnswers/data.length)*100)}%</strong></p>
                <p><strong>Yor yime:</strong>{formatTime(time)}</p>
                <button className="button is-info mr-2" onClick={onAnswersCheck}>Check your answer</button>
                <button className="button is-success" onClick={onReset}>Try again</button>
            </div>
        </div>
    )
}

export default End;