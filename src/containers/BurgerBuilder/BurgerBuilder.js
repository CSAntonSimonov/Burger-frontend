import React, { Component } from "react"

import Aux from "../../hoc/Aux"
import Burger from "../../components/Burger/Burger"
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGRIDIENTS_PRICES = {
    salad: 0.7, 
    meat: 1,
    cheese: 0.9,
    beacon: 1
}

class BurgerBuilder extends Component {
    state = {
        ingridients: {
            salad: 0, 
            meat: 0, 
            cheese: 0,
            beacon: 0
        },
        totalPrice: 4,
        purshacable: false
    }

    makePurshacable (ingridients) {
        let sum = Object.keys(ingridients)
            .map(igKey => {
                return ingridients[igKey]
            })
            .reduce( (sum, el) => {
                return sum + el;
            }, 0)

        this.setState({purshacable: sum > 0})
    }

    addIngridient = ( index ) => {
        let newState = {
            ...this.state.ingridients
        }

        let ingridient = Object.keys(newState);
        let key = ingridient[index];

        newState[key]++;

        let newTotalPrice = this.state.totalPrice + INGRIDIENTS_PRICES[key];

        this.setState({ingridients: newState, totalPrice: newTotalPrice})
        this.makePurshacable(newState);
    }

    removeIngridient = ( index ) => {
        let newState = {
            ...this.state.ingridients
        }

        let ingridient = Object.keys(newState);
        let key = ingridient[index];

        if(newState[key] <= 0) {
            return;
        }

        newState[key]--;

        let newTotalPrice = this.state.totalPrice - INGRIDIENTS_PRICES[key];

        this.setState({ingridients: newState, totalPrice: newTotalPrice})
        this.makePurshacable(newState);
    }

    

    render() {
        return (
            <Aux>
                <div>
                    <Burger ingiridents={this.state.ingridients}/>
                </div>
                <div>
                    <BuildControls 
                        totalPrice={this.state.totalPrice}
                        ingiridents={this.state.ingridients} 
                        addIngridient={this.addIngridient}
                        removeIngridient={this.removeIngridient}
                        purshacable={this.state.purshacable}
                        />
                </div>
            </Aux>
        );
    }
}

export default BurgerBuilder; 