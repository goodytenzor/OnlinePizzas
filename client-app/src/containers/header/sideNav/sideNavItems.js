import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

/**
	SideNav/ function to provide meta data to SideNav component
	*/
	const SidenavItems = () => {

		const items = [
		{
			type:'navItem',
			icon:'home',
			text:'Home',
			link:'/',
			restricted:false
		},
		{
			type:'navItem',
			icon:'file-text-o',
			text:'My Orders',
			link:'/myorders',
			restricted:true
		}
		]

		const element = (item,i) => (
			<div key={i} className={item.type}>
			<Link to={item.link}>
			<FontAwesome name={item.icon}/>
			{item.text}
			</Link>
			</div>
			)

		const showItems = () => {
			const allItems = items.map((item,i)=>{
				return element(item,i)
			})

			return allItems;
		}

		return (
			<div>
			{showItems()}
			</div>
			);
		}

		export default SidenavItems