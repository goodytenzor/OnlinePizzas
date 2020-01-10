import React, { Component } from 'react';
import NavMenu  from './sideNav/sideNav';
import {Link} from 'react-router-dom';
import {MenuIcon} from 'react-simple-sidenav'

/**
	Component to display the header bar.
	Includes Side navigation bar
	*/
	class HeaderContainer extends Component {

		state = {
			showNavMenu : false
		}

		displayNavMenu = () =>{
		//console.log("displayNavMenu");
		this.setState({ showNavMenu : true });
	}

	hideNavMenu = () =>{
		//console.log("hideNavMenu");
		this.setState({ showNavMenu : false });
	}

	render() {
		return (

			<header>

			<MenuIcon onClick={this.displayNavMenu} />
			<NavMenu showNavMenu={this.state.showNavMenu} onHideNavMenu={this.hideNavMenu} />
			<Link to="/" className="logo">Custom Online Pizzas</Link> 
			
			</header>
			
			);
	}
}

export default HeaderContainer;