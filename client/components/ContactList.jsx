import React from 'react'
import {connect} from 'react-redux'
import {Table} from 'react-bootstrap'

function ContactList(props){
	if(props.contacts.length){
		return (
			<div className='tableContainer'> 
				<Table striped bordered condensed hover>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone #</th>
						</tr>
					</thead>
					<tbody>
						{
							props.contacts.map(contact => {
								return (
									<tr key={contact.id} /*onClick={() => {history.push(`/admin/edit/user/${user.id}`)}}*/>
										<td>{contact.name}</td>
										<td>{contact.email}</td>
										<td>{contact.phone}</td>
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
			<div className='noContacts'>No Contacts</div>
		)
	}
}

export default ContactList
