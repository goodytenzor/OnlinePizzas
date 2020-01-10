import React from 'react';
import SideNav from 'react-simple-sidenav'
import SideNavItems from './sideNavItems'

/**
	Header/ Side nav component to display a simple collapsed navigation menu
	*/
	const NavMenu = (props) => {

		return (
			<div>

			<SideNav
			showNav={props.showNavMenu}
			navStyle={{
				backgroundColor : '#242424',
				maxWidth : '220px'
			}}
			onHideNav = {props.onHideNavMenu}
			>
			
			<SideNavItems />

			</SideNav>
			
			</div>

			)
	}

	export default NavMenu;