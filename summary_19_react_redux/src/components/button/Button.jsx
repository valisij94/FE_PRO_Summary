import React from 'react';
import styles from './Button.module.css';
import { useSelector } from 'react-redux';

const Button = ( {text, onClick, isDisabled} ) => {

    const currentTheme = useSelector( state => state.theme.theme );

    return (
        <button
            disabled={isDisabled}
            onClick={onClick}
            className={`${styles.button} ${styles['button_'+currentTheme]}`}
        >
            {text}
        </button>
    )
}

export default Button;