import React from 'react'

import BuildControl from "./BuildControl/BuildControl"
import classes from './BuildControls.css'
import ParticleEffectButton from 'react-particle-effect-button'

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
        <ParticleEffectButton
            hidden={props.hidden}
            color='#A0DB41'>
        <button 
            className={classes.OrderButton}
            disabled={!props.purshacable}
            onClick={props.purshacing}>ORDER NOW!</button>
        </ParticleEffectButton>
        </div>
        
    );
}

export default buildControls;