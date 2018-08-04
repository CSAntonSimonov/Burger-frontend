class BurgerBuilder {
    constructor(){
        this.state = {
            ingridients: {
                salad: 1,
                meat: 2, 
                cheese: 2
            }
        }
    }

    start(){
        const transformIng = Object.keys(this.state.ingridients);
        console.log(transformIng)
        transformIng.map(ingKey => {
            console.log([...Array(this.state.ingridients[ingKey])]);
            return [...Array(this.state.ingridients[ingKey])].map( (_, i) => {
                console.log(ingKey)
                return ingKey
            })
        })
    }
}


let burgerBuilder = new BurgerBuilder();
burgerBuilder.start();