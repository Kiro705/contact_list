import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch, Redirect} from 'react-router-dom'
import history from './history'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import AddContact from './components/AddContact.jsx'
import {fetchContacts} from './store'

class Routes extends Component {
	componentDidMount () {
		this.props.loadInitialData()
	}

	render () {
		return (
			<Router history={history}>
				<div className='container'>
					<Navbar/>
					<Switch>
						<Route path="/home" component={Home} />
						<Route path="/addContact" component={AddContact} />
						<Redirect to="/home" />
					</Switch>
				</div>
			</Router>
		)
	}
}

const mapState = (state) => {
	return {
		contacts: state.contacts,
	}
}

const mapDispatch = (dispatch) => {
	return {
		loadInitialData () {
			dispatch(fetchContacts())
		}
	}
}

export default connect(mapState, mapDispatch)(Routes)
