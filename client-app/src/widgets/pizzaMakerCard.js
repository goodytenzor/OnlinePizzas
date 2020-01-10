import React, { Component } from 'react';
import PizzaContext from '../contexts/pizzaContext'

/**
	HomeContainer/Component for adding and removing pizzas in the editor.
	Add/Remove pizza toppings.
	Provides meta data for the order with a list of pizzas.
	*/
	class PizzaMakerCard extends Component {

		constructor(props) {
			super(props);

			this.state = {
				pizzas: this.props.pizzas
			};
		}

		static getDerivedStateFromProps(props, state) {

            return {
             pizzas: props.pizzas
         };

         return null;
     }

     removePizza = (e, id) => {

       e.stopPropagation();
       let pizzaArray = this.context.state.pizzas;

       let newPizzaArray = pizzaArray.filter(function(obj) {
        return obj.PizzaId !== id;
    });

       this.context.updatePizzaList(newPizzaArray);

       this.props.removePizzaFromList(id);
   }


   guid = () => {

     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
 }

 activatePizza = () => {

        //console.log("activatePizza ");
        if (this.props.isActive)
        	return;

        let noToppings = { "Toppings": [], "PizzaId": this.guid() };

        let listPizzas = this.state.pizzas;

        if (listPizzas) {
        	listPizzas.push(noToppings);

        	this.setState({
        		pizzas: listPizzas,
        		isActive: true
        	});

            this.context.updatePizzaList(listPizzas);	
        }

    }


    handleSelection = (event, toppingIndex, toppingKey, pizzaId) => {
        
    	event.stopPropagation();

    	let pizzaArray = this.state.pizzas;

    	let newPizzaArray = pizzaArray.map((pizza) => {
    		if (pizza && pizza.PizzaId === pizzaId) {
    			if (pizza.Toppings.includes(toppingKey)) {
                    // remove this topping
                    pizza.Toppings.splice(pizza.Toppings.indexOf(toppingKey), 1);
                } else {
                    pizza.Toppings.push(toppingKey); // add this topping	
                }
            }
            return pizza;
        });

        this.context.updatePizzaList(newPizzaArray);
    }


    render() {
    	let status = (this.props.isActive) ? 'pizzaCard active' : 'pizzaCard';
    	let toppings = this.props.toppings;

    	return (
    		<div>

         <div className={status} onClick={this.activatePizza}>

         <div className="pizzaTitle">Yummy crust pizza</div>

         <div className="toppingsCard">

         <div className="title">Toppings</div>
         <ul className="toppings">
         <li className={ (toppings.indexOf('tomatoSauce') > -1) ? "selected" : null} onClick={(e)=>this.handleSelection(e,0,'tomatoSauce', this.props.id)}>Tomato Sauce</li>
         <li className={(toppings.indexOf('mozarellaCheese') > -1)? "selected" : null} onClick={(e)=>this.handleSelection(e,1,'mozarellaCheese', this.props.id)}>Mozarella Cheese</li>
         <li className={(toppings.indexOf('ham') > -1)? "selected" : null} onClick={(e)=>this.handleSelection(e,2,'ham', this.props.id)}>Ham</li>
         <li className={(toppings.indexOf('kebab') > -1)? "selected" : null} onClick={(e)=>this.handleSelection(e,3,'kebab', this.props.id)}>Kebab</li>
         </ul>
         </div>

         <div className="actionBtns">
         {
             this.props.isActive ?
             <div className="btn btn-lg btn-default" onClick={(e) => this.removePizza(e,this.props.id)}>
             <span className="fa fa-minus-circle"></span> Remove
             </div>	
             :
             <div className="btn btn-lg btn-default">
             <span className="fa fa-plus-circle"></span>Add
             </div>
         }
         </div>

         </div>




         </div>
         );
     }
 }

 PizzaMakerCard.contextType = PizzaContext;

 export default PizzaMakerCard