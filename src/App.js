import React, { useState, useEffect } from 'react';

import quizzData from './data/quiz.json'

import './App.css';
import Question from './components/Question';
import Start from './components/Start'

const App = () => {
  const [step, setStep] = useState(1),
    [activeQuestion, setActiveQuestion] = useState(0),
    [answers, setAnswers] = useState([]);

  const quizStartHandler = () => {
    setStep(2)
  }
  
  return (
    <div className="App">
      {step===1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <Question
        data={quizzData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizzData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        />}
    </div>
  );
}

export default App;
