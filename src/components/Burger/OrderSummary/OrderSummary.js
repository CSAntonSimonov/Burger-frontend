import React from 'react'

import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
    let order = Object.keys(props.ingridients).map(igKey => {
        return <li key={igKey}><span>{igKey}: </span>{props.ingridients[igKey]}</li>
    })
    return(
        <Aux>
        <p>Your burger with follow ingridients:</p>
        {order}
        <p>Continue order</p>
        </Aux>
    );
}

export default orderSummary;