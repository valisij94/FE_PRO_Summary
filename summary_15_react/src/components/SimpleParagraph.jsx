import React from "react";
import classes from './SimpleParagraph.module.css';

const SimpleParagraph = ( props ) => {

    return (
        <p
            style={{
                fontSize: props.fontSize,
                color: props.textColor
            }}
            className={classes.simpleParagraph}
        >
            {props.text}
        </p>
    );
}

export default SimpleParagraph;
