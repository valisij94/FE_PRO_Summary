import React, { useState } from "react";
import Input from "../input/Input";
import styles from './LoginForm.module.css';
import CurrentDate from "./CurrentDate";

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
    }

    return (
        <div className={styles.loginFormContainer}>
            <h4 className={styles.loginFormHeader}>Простая форма входа</h4>
            <CurrentDate />
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
        </div>
    )
};

export default LoginForm;