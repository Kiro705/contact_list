import React from 'react'
import history from './../history'

function Navbar(props){
	return (
		<div className='navbar'>
			<div className='navicon' onClick={() => {history.push('/home')}}>
			  <i className="fas fa-envelope"></i>
			</div>
			<h2 className='navtext' onClick={() => {history.push('/home')}}>Contact List</h2>
		</div>
	)
}

export default Navbar
