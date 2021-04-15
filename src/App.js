import React, { useState, useEffect } from 'react';

import quizzData from './data/quiz.json'

import './App.css';
import Question from './components/Question';
import Start from './components/Start'
import End from './components/End';
import Modal from './components/Modal'

let interval;

const App = () => {
  const [step, setStep] = useState(1),
    [activeQuestion, setActiveQuestion] = useState(0),
    [answers, setAnswers] = useState([]),
    [time, setTime] = useState(0),
    [showModal, setShowModal] = useState(false),
    [userName, setUserName] = useState(''),
    [userEmail, setUserEmail] = useState(''),
    [userSurname, setUserSurname] = useState('');

  const timer = () => {
    return setTime(time => time + 1)
  }
  useEffect(() => {
    if (step === 3) {
      clearInterval(interval)
    }
  }, [step]);

  const quizStartHandler = () => {
    interval = setInterval(timer, 1000)
    setStep(2)
  }
  const resetClickHandler = () => {
    setActiveQuestion(0)
    setAnswers([])
    setTime(0)
    setStep(2)
    interval = setInterval(timer, 1000)
  }
  const onClose = () => {
    setShowModal(false)
  }
  const onAnswersCheck = () => [
    setShowModal(true)
  ]
  return (
    <div className="App">
      {step === 1 && <Start
        onQuizStart={quizStartHandler}
        userName={userName}
        userSurname={userSurname}
        onUserSurnameUpdate={setUserSurname}
        onUserNameUpdate={setUserName}
        userEmail={userEmail}
        onUserEmailUpdate={setUserEmail}
      />}
      {step === 2 && <Question
        data={quizzData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizzData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End
        results={answers}
        data={quizzData.data}
        time={time}
        onAnswersCheck={onAnswersCheck}
        onReset={resetClickHandler}
        userName={userName}
        userSurname={userSurname}
      />}
      {showModal && <Modal
        results={answers}
        data={quizzData.data}
        onClose={onClose}
        userName={userName}
        userSurname={userSurname}
      />}
    </div>
  );
}

export default App;
