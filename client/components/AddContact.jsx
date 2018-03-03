import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {postContact, validSuccessAction, emptyFieldAction, invalidEmailAction, nonUniqueEmailAction} from './../store'

function AddContactForm(props){
	return (
		<div className='tableContainer'>
			<h2 className='montserratFontBlue'>Add a Contact</h2>
			<form id='newCategoryForm' onSubmit={(evt) => {props.handleSubmit(evt, props.contacts)}}>
				<div className='formElement'>
					<span>
						<h5 className='montserratFont'>Name</h5>
					</span>
					<input
						className='montserratFontBlue'
						autoComplete= 'off'
						type='text'
						name='name'
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
					/>
				</div>
				<Button type='submit'>Create Contact</Button>
				<p className='montserratFontBold'>{props.formValidator.result}</p>
			</form>
		</div>
	)
}

const mapStateToProps = function(state) {
	return {
		contacts: state.contacts,
		formValidator: state.formValidator,
	}
}

function mapDispatchToProps (dispatch){
	return {
		handleSubmit: function(evt, contacts){
			evt.preventDefault()
			const {name, email, phone} = evt.target

			//checking if email is unique
			let unique = true
			contacts.forEach(contact => {
				if(contact.email === email.value){
					unique = false
				}
			})
			if(!name.value.length || !email.value.length || !phone.value.length){
				dispatch(emptyFieldAction())
			} else if(!email.value.includes('@') || !email.value.includes('.')) {
				dispatch(invalidEmailAction())
			} else if(unique){
				dispatch(validSuccessAction())
				dispatch(postContact({name: name.value, email: email.value, phone: phone.value}))
			} else {
				dispatch(nonUniqueEmailAction())
			}
		}
	}
}

const AddContactContainer = connect(mapStateToProps, mapDispatchToProps)(AddContactForm)

export default AddContactContainer
