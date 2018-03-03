import React from 'react'
import {connect} from 'react-redux'
import {Table, Button, FormControl} from 'react-bootstrap'
import {writeFilter} from './../store'
import history from './../history'

function ContactList(props){
	let contactList = props.contacts
	if(props.filter.string){
		contactList = contactList.filter(contact => contact.name.includes(props.filter.string))
	}
	if(contactList.length){
		return (
			<div className='tableContainer'> 
				<Button onClick={() => {history.push('/addContact')}}>Add a Contact</Button>
				<FormControl
					className='formElement'
          type='text'
          placeholder='Search list by name.'
          onChange={props.handleFilter}
        />
				<Table striped bordered condensed hover>
					<thead>
						<tr>
							<th className='montserratFontBold'>Name</th>
							<th className='montserratFontBold'>Email</th>
							<th className='montserratFontBold'>Phone #</th>
						</tr>
					</thead>
					<tbody>
						{
							contactList.map(contact => {
								return (
									<tr key={contact.id} onClick={() => {history.push(`/editContact/${contact.id}`)}}>
										<td className='montserratFont'>{contact.name}</td>
										<td className='montserratFont'>{contact.email}</td>
										<td className='montserratFont'>{contact.phone}</td>
									</tr>
								)
							})
						}
					</tbody>
				</Table>
			</div>
		)
	} else {
		if(props.filter.string){
			return (
				<div className='noContacts'>
					<Button onClick={() => {history.push('/addContact')}}>Add a Contact</Button>
					<FormControl
	          type='text'
	          placeholder='Search list by name.'
	          onChange={props.handleFilter}
	        />
					<h4 className='montserratFont'>No Matching Contacts</h4>
				</div>
			)
		} else {
			return (
			<div className='noContacts'>
				<h4 className='montserratFont'>No Contacts</h4>
				<Button onClick={() => {history.push('/addContact')}}>Add a Contact</Button>
			</div>
		)
		}
	}
}

const mapState = function(state) {
	return {
		filter: state.filter,
	}
}

function mapDispatch (dispatch){
	return {
		handleFilter: function(evt){
			evt.preventDefault()
			dispatch(writeFilter(evt.target.value))
		}
	}
}

const ContactListContainer = connect(mapState, mapDispatch)(ContactList)

export default ContactListContainer
