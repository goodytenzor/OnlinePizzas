import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './hocs/layout'
import Home from './components/home'
import Orders from './components/orders'


const Routes = (props) => {
	
	return (
		
		<Layout>
		
		<Switch>
		
		<Route path='/myorders' exact component={Orders} />
		<Route path='/' component={Home} />
		
		</Switch>
		
		</Layout>

		)
}

export default Routes;