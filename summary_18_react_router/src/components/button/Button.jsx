import React from 'react';
import styles from './Button.module.css';

const Button = ( {text, onClick, isDisabled} ) => {
    return (
        <button disabled={isDisabled} onClick={onClick} className={styles.button}>
            {text}
        </button>
    )
}

export default Button;