import React, { Component } from 'react';
import HeaderContainer from '../containers/header/headerContainer'

/**
	Root/HOC Component to display common header bar and rest of application pages.  
	*/
	class Layout extends Component {
		render(props) {
			return (
				<div>
				
				<HeaderContainer />
				
				{this.props.children}
				
				</div>
				);
			}
		}

		export default Layout;