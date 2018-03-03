import axios from 'axios'
import history from '../history'

const GET_CONTACTS = 'GET_CONTACTS'
const POST_CONTACT = 'POST_CONTACT'
const EDIT_CONTACT = 'EDIT_CONTACT'
const DELETE_CONTACT = 'DELETE_CONTACT'

const contacts = [null]

const getContacts = contacts => ({type: GET_CONTACTS, contacts})
const makeContact = contact => ({type: POST_CONTACT, contact})
const editContact = contact => ({type: EDIT_CONTACT, contact})
const deleteCategoryAction = category => ({type: DELETE_CONTACT, category})

export function fetchContacts () {
	return function thunk (dispatch) {
		return axios.get('/api/contacts')
			.then(res => res.data)
			.then(contacts => {
				dispatch(getContacts(contacts))
			})
	}
}

export function postContact (contact) {
	return function thunk (dispatch) {
		return axios.post('/api/contacts', contact)
			.then(res => res.data)
			.then(newContact => {
				dispatch(makeContact(newContact))
				history.push('/home')
			})
	}
}

export function putContact (contact) {
	return function thunk (dispatch) {
		return axios.put(`/api/contacts/${contact.id}`, contact)
			.then(res => res.data)
			.then(targetContact => {
				dispatch(editContact(targetContact))
				history.push('/home')
			})
	}
}

// export function deleteCategory (category) {

// 	return function thunk (dispatch) {
// 		return axios.delete(`/api/categories/${category.id}`)
// 			.then(res => res.data)
// 			.then( () => {
// 				dispatch(deleteCategoryAction(category))
// 			})
// 			// Refreshing products to update lack of deleted category
// 			.then(() => {
// 				dispatch(fetchProducts())
// 				history.push('/admin')
// 			})
// 	}
// }

/**
 * REDUCER
 */
export default function (state = contacts, action) {
	switch (action.type) {
	case GET_CONTACTS:
		return action.contacts
	case POST_CONTACT:
		return state.concat(action.contact)
	case EDIT_CONTACT:
		return state.filter(contact => Number(contact.id) !== Number(action.contact.id)).concat(action.contact)
	// case DELETE_CONTACT:
	// 	return state.filter(category => Number(category.id) !== Number(action.category.id))
	default:
		return state
	}
}