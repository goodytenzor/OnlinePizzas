
import React , {Component} from 'react';
import PizzaContext from '../contexts/pizzaContext'

class PizzaProvider extends Component {
	
	state = { pizzas : [] }

	render() {
		return (
			
			<PizzaContext.Provider 
			value={{
				state: this.state,
				updatePizzaList : (value) => {
					this.setState({ pizzas : value });
				} 
			}}
			>
			{this.props.children}   
			
			</PizzaContext.Provider>
			);
		}
	}

	export default PizzaProvider