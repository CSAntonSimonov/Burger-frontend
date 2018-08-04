import React from 'react'

import BuildControl from "./BuildControl/BuildControl"
import classes from './BuildControls.css'

const buildControls = (props) => {
    let ingridients = ['salad', 'meat', 'cheese', "beacon"]

    return (
        <div className={classes.BuildControls}>
        <p>TotalPrice: {props.totalPrice.toFixed(2) + "$"}</p>
        {ingridients.map((ingridient, index) => {
            let number = props.ingiridents[ingridient];
            console.log(props.ingiridents)
            return <BuildControl 
                key={ingridient + index}
                title={ingridient} 
                number={number}  
                addIngridient={() => props.addIngridient(index)}
                removeIngridient={() => props.removeIngridient(index)}
                />
        })}
        <button 
            className={classes.OrderButton}
            disabled={!props.purshacable}
            onClick={props.purshacing}>ORDER NOW!</button>
        </div>
    );
}

export default buildControls;