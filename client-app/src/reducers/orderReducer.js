/**
	Reducer function exposing transactions for Pizza Orders
	*/
	export default function(state = {}, action){

		switch(action.type){

			case 'GET_ALL_ORDERS':
			return { ...state, listOrders : action.payload};

			case 'CREATE_NEW_ORDER':
			return { ...state, newOrder : action.payload};

			case 'GET_PRICE_QUOTE_FOR_ORDER':
			return	{ ...state, priceQuote : action.payload};

			default:
			return state;
			
		}

	}