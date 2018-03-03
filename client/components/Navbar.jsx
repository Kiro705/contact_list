import React from 'react'
import { NavLink } from 'react-router-dom'
import history from './../history'

function Navbar(props){
	return (
		<div className='navbar'>
			<NavLink className='navicon' to={'/home'}>
		  	<i className="fas fa-envelope"></i>
		  </NavLink>
			<NavLink to={'/home'}><h2 className='navtext'>Contact List</h2></NavLink>
		</div>
	)
}

export default Navbar
