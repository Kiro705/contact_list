import axios from 'axios'
import history from '../history'

const GET_CONTACTS = 'GET_CONTACTS'
const POST_CONTACT = 'POST_CONTACT'
const EDIT_CONTACT = 'EDIT_CONTACT'
const DELETE_CONTACT = 'DELETE_CONTACT'

const contacts = [null]

const getContacts = contacts => ({type: GET_CONTACTS, contacts})
const makeContact = contact => ({type: POST_CONTACT, contact})
const editCategoryAction = category => ({type: EDIT_CATEGORY, category})
const deleteCategoryAction = category => ({type: DELETE_CATEGORY, category})

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

// export function editCategory (category) {
// 	return function thunk (dispatch) {
// 		return axios.put(`/api/categories/${category.id}`, category)
// 			.then(res => res.data)
// 			.then(targetCategory => {
// 				dispatch(editCategoryAction(targetCategory))
// 				history.push('/admin')
// 			})
// 	}
// }

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
	// case EDIT_CATEGORY:
	// 	return state.filter(category => Number(category.id) !== Number(action.category.id)).concat(action.category)
	// case DELETE_CATEGORY:
	// 	return state.filter(category => Number(category.id) !== Number(action.category.id))
	default:
		return state
	}
}