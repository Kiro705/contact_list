import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {putContact, validSuccessAction, emptyFieldAction, invalidEmailAction, nonUniqueEmailAction} from './../store'

function EditContactForm(props){

	if(props.contacts[0] === null){
		return (<div className='noContacts'>Loading</div>)
	}

	const contactId = Number(props.match.params.id)
	const theContact = props.contacts.filter(contact => {
		return contact.id === contactId
	})[0]

	if(theContact !== undefined){
		return (
			<div className='tableContainer'>
				<h2 className='montserratFontBlue'>Edit the Contact</h2>
				<form id='newCategoryForm' onSubmit={(evt) => {props.handleSubmit(evt, props.contacts, contactId, theContact.email)}}>
					<div className='formElement'>
						<span>
							<h5 className='montserratFont'>Name</h5>
						</span>
						<input
							className='montserratFontBlue'
							autoComplete= 'off'
							type='text'
							name='name'
							defaultValue={theContact.name}
						/>
					</div>
					<div className='formElement'>
						<span>
							<h5 className='montserratFont'>Email</h5>
						</span>
						<input
							className='montserratFontBlue'
							autoComplete= 'off'
							type='text'
							name='email'
							defaultValue={theContact.email}
						/>
					</div>
					<div className='formElement'>
						<span>
							<h5 className='montserratFont'>Phone #</h5>
						</span>
						<input
							className='montserratFontBlue'
							autoComplete= 'off'
							type='text'
							name='phone'
							defaultValue={theContact.phone}
						/>
					</div>
					<Button type='submit'>Confirm Edits</Button>
					<p className='montserratFontBold'>{props.formValidator.result}</p>
				</form>
			</div>
		)
	} else {
		return (<div className='noContacts'>No contact with ID {contactId}.</div>)
	}
}

const mapStateToProps = function(state) {
	return {
		contacts: state.contacts,
		formValidator: state.formValidator,
	}
}

function mapDispatchToProps (dispatch){
	return {
		handleSubmit: function(evt, contacts, id, currentEmail){
			evt.preventDefault()
			const {name, email, phone} = evt.target

			//checking if email is unique
			let unique = true
			contacts.forEach(contact => {
				if(contact.email === email.value && currentEmail !== email.value){
					unique = false
				}
			})
			if(!name.value.length || !email.value.length || !phone.value.length){
				dispatch(emptyFieldAction())
			} else if(!email.value.includes('@') || !email.value.includes('.')) {
				dispatch(invalidEmailAction())
			} else if(unique){
				dispatch(validSuccessAction())
				dispatch(putContact({id, name: name.value, email: email.value, phone: phone.value}))
			} else {
				dispatch(nonUniqueEmailAction())
			}
		}
	}
}

const EditContactContainer = connect(mapStateToProps, mapDispatchToProps)(EditContactForm)

export default EditContactContainer
