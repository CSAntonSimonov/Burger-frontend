import React from 'react';

import BurgerIngridient from './BurgerIngridient/BurgerIngridient';
import classes from './Burger.css'

const burger = (props) => {
    let transformedIngridients = Object.keys(props.ingiridents)
    .map(igKey => {
        return [...Array(props.ingiridents[igKey])]
        .map((_, i) => {
            return <BurgerIngridient type={igKey} key={igKey + i} />
        })
    })
        .reduce( (arr, el) => {
            return arr.concat(el);
        }, [])

    if(transformedIngridients.length === 0) {
        transformedIngridients = <p>Please start add ingridients!</p>
    }


    return(
        <div className={classes.Burger}>
        <BurgerIngridient type="bread-top" />
        {transformedIngridients}
        <BurgerIngridient type="bread-bottom" />
        </div>
    );
}

export default burger;