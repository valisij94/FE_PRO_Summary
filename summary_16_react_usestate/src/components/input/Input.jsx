import React from 'react';
import styles from './Input.module.css';

const Input = ( {value, type, onChange, isError} ) => {
    return (
        <div>
            <input
                value={value}
                onChange={onChange}
                type={type}
                className={`${styles.input} ${isError ? styles.errorInput: ''}`}
            />
        </div>
    )
}

export default Input;