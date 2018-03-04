import React, {Component} from 'react'
import {connect} from 'react-redux'
import ContactList from './ContactList.jsx'
import {resetValidatorAction, resetFilter} from './../store'

class Home extends Component {
	componentDidMount () {
		this.props.resetForms()
	}

	render () {
		//Will be null before database is loaded
		if(this.props.contacts[0] === null){
			return (
					<div className='noContacts'>Loading</div>
				)
		} else {
			return (
				<ContactList contacts={this.props.contacts} />
			)
		}
	}
}

const mapState = function(state) {
	return {
		contacts: state.contacts,
	}
}

const mapDispatch = (dispatch) => {
	return {
		resetForms () {
			dispatch(resetValidatorAction())
			dispatch(resetFilter())
		}
	}
}

const HomeContainer = connect(mapState, mapDispatch)(Home)
export default HomeContainer
