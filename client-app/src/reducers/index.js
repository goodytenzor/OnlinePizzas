import { combineReducers } from 'redux'
import orderReducer from './orderReducer'

/**
	Multiple reducers combined into one
	*/
	const rootReducers = combineReducers({
		
		orderReducer
		
	});


	export default rootReducers;