import React from 'react'
import {connect} from 'react-redux'
import ContactList from './ContactList.jsx'

const mapStateToProps = function(state) {
	return {
		contacts: state.contacts,
	}
}

function Home(props){
	//Will be null before database is loaded
	if(props.contacts[0] === null){
		return (
				<div className='noContacts'>Loading</div>
			)
	} else {
		return (
			<ContactList contacts={props.contacts} />
		)
	}
}

const HomeContainer = connect(mapStateToProps)(Home)
export default HomeContainer
