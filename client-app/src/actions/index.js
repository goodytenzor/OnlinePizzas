import axios from 'axios'

let serverURI = "http://localhost:3100/api/";


/**
	Exposes a list of actions for all reducers
	*/
	export function getOrders(){

		let list = '';
		let req = axios.get(serverURI + 'getAllOrders')
		.then(res => {
			if(list)
			{
				return [...list,...res.data]
			}
			else{
				return res.data
			}
		});

		return ({
			type : 'GET_ALL_ORDERS',
		payload : req   // send back the promise. When the promise is resolved, the reducers will handle it.
	});

	}

	export function getPrice(order){

		let req = axios.post(serverURI + 'getPriceForOrder', order)
		.then(res => res.data);

		return ({
			type : 'GET_PRICE_QUOTE_FOR_ORDER',
			payload : req
		});

	}

	export function createNewOrder(order){

		let req = axios.post(serverURI + 'addOrder', order)
		.then(res => res.data);

		return({
			type : 'CREATE_NEW_ORDER',
			payload : req
		});

	}
