import React from 'react'
import {connect} from 'react-redux'
import {Table, Button} from 'react-bootstrap'
import history from './../history'

function ContactList(props){
	if(props.contacts.length){
		return (
			<div className='tableContainer'> 
				<Button onClick={() => {history.push('/addContact')}}>Add a Contact</Button>
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
							props.contacts.map(contact => {
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
		return (
			<div className='noContacts'>
				<h4 className='montserratFont'>No Contacts</h4>
				<Button onClick={() => {history.push('/addContact')}}>Add a Contact</Button>
			</div>
		)
	}
}

export default ContactList
