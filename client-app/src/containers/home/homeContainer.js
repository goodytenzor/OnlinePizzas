import React, { Component } from 'react';
import CheckoutCard from '../../widgets/checkoutCard';
import PizzaMakerCard from '../../widgets/pizzaMakerCard';
import PizzaProvider from '../../providers/pizzaProvider';
import PizzaContext from '../../contexts/pizzaContext'

/**
	Container to display Pizza cards on the left side 
	and Order information on the right side.
	Route: '/'
	*/
	class HomeContainer extends Component {
		constructor(props) {
			super(props);
			
			this.state = {
				pizzas: []
			};

			this.removePizzaFromList = this.removePizzaFromList.bind(this);
		}


		componentWillReceiveProps(newProps) {
			console.log("componentWillReceiveProps HomeContainer")
			if (this.props !== newProps) {
				this.setState({
					pizzas: newProps.pizzas
				});
			}
		}

		removePizzaFromList(id) {
			if (id) {
				let pizzaArray = this.state.pizzas;
				let newPizzaArray = pizzaArray.filter(function(obj) {
					return obj.PizzaId !== id;
				});

				this.setState({
					pizzas: newPizzaArray
				});
			}
		}


		render(props) {

			let listPizzas = this.state.pizzas;

			return (

				<div className="">

				<PizzaProvider>

				<div className="col-lg-8 col-md-8 col-sm-12 left">

				<div id="pizzaEditor" className="spacer">

				<h3>Customize your pizzas</h3>

				<hr />
				<PizzaContext.Consumer>
				{
					(context) => (

						( listPizzas && listPizzas.length > 0) ?

						listPizzas.map((pizza,i) => (
							<PizzaMakerCard key={pizza.PizzaId} id={pizza.PizzaId} 
							toppings={pizza.Toppings} isActive={true} {...this.state} 
							removePizzaFromList={this.removePizzaFromList} 
							/>
							))
						:
						null


						)}
					</PizzaContext.Consumer>

					<PizzaMakerCard isActive={false} {...this.state} toppings={[]} />

					</div>

					</div>

					<div className="col-lg-4 col-md-4 col-sm-12 left">

					<div id="checkoutEditor" className="spacer">

					<CheckoutCard  />

					</div>

					</div>

					</PizzaProvider>

					</div>

					);
		}
	}
	HomeContainer.contextType = PizzaContext;

	export default HomeContainer;