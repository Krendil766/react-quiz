import React, { useState, useEffect, useRef } from 'react';

const Question = ({
    data,
    onAnswerUpdate,
    numberOfQuestions,
    activeQuestion,
    onSetActiveQuestion,
    onSetStep
}) => {
    const [selected, setSelected] = useState(''),
        [error, setError] = useState('');

    const radiosWrapper = useRef();

    const changeHandler = (e) => {
        setSelected(e.target.value)
    }

    const nextClickHandler = (e) => {
        if (selected === '') {
            return setError('Please select one option')
        }

        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
        setSelected('');
        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1)
        } else {
            onSetStep(0)
        }

    }
    return (
        <div className="card">
            <div className="card-content">
                <h2 className="mb-5">{data.question}</h2>
                <div className="control">
                    {data.choices.map((choice,i) => (
                        <label key={i} className="label radio has-background-light">
                        <input
                            type="radio"
                            name="answer"
                            value={choice}
                            onChange={changeHandler} />
                        {choice}
                    </label>
                    ))}
                </div>
                {error && <div className="has-text-danger">{error}</div>}
                <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button>
            </div>
        </div>
    )
}

export default Question;