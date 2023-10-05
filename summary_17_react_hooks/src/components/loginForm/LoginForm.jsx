import React, { useEffect, useState } from "react";
import Input from "../input/Input";
import AttemptsList from "../attempts/AttemptsList";
import styles from './LoginForm.module.css';

const LoginForm = () => {

    const [formState, setFormState] = useState( {
        login: {
            value: '',
            isError: false,
        },
        passwd: {
            value: '',
            isError: false
        }
    } );

    const [attempts, setAttempts] = useState([]);


    const onClickHandler = () => {
        const attemptData = {
            login: formState.login.value,
            passwd: formState.passwd.value,
            date: Date.now()
        }
        const newState = { ...formState };
        newState.login = {
            ...formState.login,
            isError: formState.login.value.length === 0
        }
        newState.passwd = {
            ...formState.passwd,
            isError: formState.passwd.value.length === 0
        }
        setFormState(newState);
        setAttempts( [...attempts, attemptData] );
    }

    return (
        <div className={styles.loginFormContainer}>
            <h4 className={styles.loginFormHeader}>Простая форма входа</h4>
            <Input
                type='text'
                value={formState.login.value}
                isError={formState.login.isError}
                onChange={ (event) => {
                    setFormState( (prevState) => {
                        const newState = { ...prevState };
                        newState.login = {
                            ...prevState.login,
                            value: event.target.value
                        };
                        return newState;
                    })
                }}
            />
            <Input
                type='password'
                value={formState.passwd.value}
                isError={formState.passwd.isError}
                onChange={ (event) => {
                    setFormState( (prevState) => {
                        const newState = { ...prevState };
                        newState.passwd = {
                            ...prevState.passwd,
                            value: event.target.value
                        };
                        return newState;
                    })
                }}
            />
            <button className={styles.enterButton} onClick={onClickHandler}>Enter</button>
            <AttemptsList attempts={attempts} dropAttempt={() => {}} />
        </div>
    )
};

export default LoginForm;