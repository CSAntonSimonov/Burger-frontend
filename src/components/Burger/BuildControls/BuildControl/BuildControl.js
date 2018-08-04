import React from 'react'

import classes from "./BuildControl.css"

const buildControl = (props) => {
    return (
    <div className={classes.BuildControl}>
        <p className={classes.Label}>{props.title}</p>
        <button 
            className={classes.Less}
            onClick={props.removeIngridient}>Less</button>
        <button 
            className={classes.More} 
            onClick={props.addIngridient}>More</button>
        <p>Quantity: {props.number}</p>
    </div>
    );
}

export default buildControl;