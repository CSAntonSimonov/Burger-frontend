import React from 'react'

import classes from './OrderSummary.css'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    let order = Object.keys(props.ingridients).map(igKey => {
        return <li key={igKey}><span>{igKey}: </span>{props.ingridients[igKey]}</li>
    })
    return(
        <div className={classes.Order}>
        <h3>Checkout</h3>
        <p>Your burger with follow ingridients:</p>
        {order}
        <p><strong>Total price: {props.total.toFixed(2)}$</strong></p>
        <p>Continue order</p>
        <div className={classes.btns}>
        <Button
            btnType='Danger'
            clicked={props.closeModal}>CANCEL</Button>
        <Button
            btnType='Success'>CONTINUE</Button>
        </div>
        </div>
    );
}

export default orderSummary;