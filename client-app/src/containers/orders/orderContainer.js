import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../../actions';

import OrderItem from '../../widgets/orderItemCard';

/**
	Container to display all orders.
	Route: '/myorders'
	*/
	class OrderContainer extends Component {

		componentWillMount(){
			this.props.dispatch(getOrders());
		}


		renderItems = (Orders) => (
			(Orders.listOrders && Orders.listOrders.length > 0) ?  
			
			<div className="container">
			
			<table className="table table-condensed">
			<thead className="thOrders">
			<tr>
			<td>Order ID</td>
			<td>Total Pizzas</td>
			<td>Total Price</td>
			</tr>
			</thead>
			<tbody>
			{
				Orders.listOrders.map( item => (
				<OrderItem {...item} key={item.orderId}/>
				))
			}
			</tbody>
			</table>
			
			</div>
			
			:
			
			<div>
			
			<p className="text-center">You have not made any orders yet</p>
			
			</div>
			
			)

		render() {
			return (
				
				<div>
				
				<h3 className="text-center">My Orders</h3>
				<hr />

				{this.renderItems(this.props.Orders)}
				
				</div>
				
				);
			}
		}

		function mapStateToProps(state){
			return {
				Orders:state.orderReducer
			}
		}

		export default connect(mapStateToProps)(OrderContainer)