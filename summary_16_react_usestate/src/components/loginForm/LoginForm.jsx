import React, { useState } from "react";
import Input from "../input/Input";

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
        <div>
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
            <button onClick={onClickHandler}>Enter</button>
            {
                attempts.map( elem => {
                    return (
                        <p
                            key={elem.date}
                            onClick={() => {
                                const newAttemps = attempts.filter(el => el.date !== elem.date);
                                setAttempts(newAttemps);
                            }}
                        >
                            {`${elem.login} ${elem.passwd} ${elem.date}`}
                        </p>
                    )
                })
            }
        </div>
    )
};

export default LoginForm;