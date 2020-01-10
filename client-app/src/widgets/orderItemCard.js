import React from 'react';

/**
	OrderContainer/function that displays a single record of a pizza Order.
	*/
	const OrderItem = (item) => {
		return (
			<tr>
			<td>{item.orderId}</td>
			<td>{item.totalPizzas}</td>
			<td>$ {item.totalCost}</td>
			</tr>
			);
	};

	export default OrderItem;