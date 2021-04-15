import React from 'react';
import { validateEmail } from '../utils'

const Start = ({
    onQuizStart,
    userName,
    userEmail,
    onUserNameUpdate,
    onUserEmailUpdate,
    userSurname,
    onUserSurnameUpdate
}) => {
    const onResetInput = (e) => {
        onUserNameUpdate('')
        onUserEmailUpdate('')
    }
    const onChangeInput = (e, fieldName) => {
        const value = e.target.value;
        if (fieldName === 'name') {
            onUserNameUpdate(value)
        } else if (fieldName === 'email') {
            onUserEmailUpdate(value)
        } else if (fieldName === 'surname') {
            onUserSurnameUpdate(value)
        }
    }
    return (
        <div className="card">
            <div className="card-content">
                <h1 className='title is-1'>Start the Quiz</h1>
                <p className='title is-3'>Good luck!</p>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-success"
                            type="text"
                            placeholder="Name"
                            value={userName} onChange={(e) => onChangeInput(e, 'name')} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </div>
                    {/* <p className="help is-success">This username is available</p> */}
                </div>
                <div className="field">
                    <label className="label">Surname</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-success"
                            type="text"
                            placeholder="Surname"
                            value={userSurname} onChange={(e) => onChangeInput(e, 'surname')} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </div>
                    {/* <p className="help is-success">This username is available</p> */}
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className={validateEmail(userEmail) ? "input is-success" : "input is-danger"}
                            type="email"
                            placeholder="Email"
                            value={userEmail}
                            onChange={(e) => onChangeInput(e, 'email')} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                    {!validateEmail(userEmail) && <p className="help is-danger">This email is invalid</p>}
                </div>
                <button className="button is-info" onClick={onQuizStart} disabled={validateEmail(userEmail) ? false : true}>Start</button>
                <button className="button is-info" onClick={onResetInput}>Reset</button>

            </div>
        </div>
    )
}
export default Start;