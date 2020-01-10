import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPrice, createNewOrder } from '../actions';
import PizzaContext from '../contexts/pizzaContext'

/**
	HomeContainer/Component for checking price for pizzas and making a purchase.
	Allows user to input distance as parameter.
	Updates price information from external API based on selections.
	Allows user to make an order.
	*/
	class CheckoutCard extends Component {
		constructor(props) {
			super(props)
			this.state = {
				distance : 1,
			customerId : 0, // fake
			pizzas :[],
			price : null,
			newOrder : null
		}
	}

	static getDerivedStateFromProps(props, state) {
		return {
			price :  props.orderInfo.priceQuote,
			newOrder : (state.newOrder !== props.orderInfo.newOrder) ? props.orderInfo.newOrder : null 
		};

	}

	getOrderObj = () => {
		const order = {
			"Distance" : this.state.distance,
			"CustomerId" : this.state.customerId,
			"CustomPizzas" : this.context.state.pizzas
		}		

		return  order;
	}

	getPrice = () => {

		let newOrder = this.getOrderObj();
		this.props.dispatch(getPrice(newOrder));
	}

	createNewOrder = (e) => {
		e.preventDefault();
		let newOrder = this.getOrderObj();
		this.props.dispatch(createNewOrder(newOrder));
	}

	handleDistanceChange = (event) => {
		event.preventDefault();

		this.setState({
			distance : event.target.value,
			newOrder : {}
		})
	}

	getSnapshotBeforeUpdate(prevProps, prevState){

		this.getPrice();
		return null;
	}

	shouldComponentUpdate(nextProps, nextState) {

		return (
			this.state === nextState
			) ? false : true;
		
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		//skip
	}


	render() {
		
		let listPizzas = this.state.pizzas;
		let price = this.state.price;
		let distance = this.state.distance;

		return (
			<div>

			<PizzaContext.Consumer>
			{
				(context) => (
					
					<div>

					<h3 className="text-center">Order Summary</h3>
					<hr />

					<form onSubmit={this.getorderInfo}>
					<table className="table">
					<tbody>
					<tr>
					<td>
					<label>Distance to home (in kilometers)</label>
					<input className="form-control w100 right" type="number" max="10" min="0" 
					onChange={this.handleDistanceChange} value={distance} /> 

					{
						this.state.distance > 5 ? 
						<div className="error">
						<span>Sorry, we deliver only within 5 kilometers.</span>
						</div>
						:
						null
					}
					</td>
					</tr>
					</tbody>
					</table>
					</form>

					{

						(context.state.pizzas && context.state.pizzas.length > 0) ? 
						
						<div className="orderInfo">

						<div className="orderedItems">
						{
							price && price.orderedItems ?
							<ol>
							{
								price.orderedItems.map((item,i) => <li key={i}>{item}</li>)
							}
							</ol>
							:
							null	
						}
						</div>

						{ 
							price && price.deliveryCost ?
							<span className="small"> 
							Delivery cost : { price.deliveryCost === 0 ? "Free" : `$${price.deliveryCost}` }
							</span>
							:
							null
						}

						<h4>Total : $ { price && price.totalCost ? price.totalCost : 0 }</h4>

						<br/>

						{ 
							price && price.deliveryCost ?
							<button type="button" className="btn btn-lg btn-success btn-block" onClick={this.createNewOrder}>
							<span className="fa fa-pizza-slice"></span>
							Place Order
							</button>
							:
							null
						}


						</div>
						: 
						null
					}

					</div>	)}
				</PizzaContext.Consumer>
				</div>
				)}

	}
	CheckoutCard.contextType = PizzaContext;


	function mapStateToProps(state) {
		return{
			orderInfo : state.orderReducer
		}
	}

	export default connect(mapStateToProps)(CheckoutCard);