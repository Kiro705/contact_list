
const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS'
const EMPTY_FIELD = 'EMPTY_FIELD'
const INVALID_EMAIL = 'INVALID_EMAIL'
const NON_UNIQUE_EMAIL = 'NON_UNIQUE_EMAIL'
const RESET_FORMS = 'RESET_FORMS'

const formMessage = {
	result: null
}

export const validSuccessAction = () => ({type: SUBMIT_SUCCESS})
export const emptyFieldAction = () => ({type: EMPTY_FIELD})
export const invalidEmailAction = () => ({type: INVALID_EMAIL})
export const nonUniqueEmailAction = () => ({type: NON_UNIQUE_EMAIL})
export const resetValidatorAction = () => ({type: RESET_FORMS})

export default function (state = formMessage, action) {
	switch (action.type) {
	case SUBMIT_SUCCESS:
		return Object.assign({}, state, {result: null})
	case EMPTY_FIELD:
		return Object.assign({}, state, {result: 'At least one empty field.'})
	case INVALID_EMAIL:
		return Object.assign({}, state, {result: 'Not a valid email.'})
	case NON_UNIQUE_EMAIL:
		return Object.assign({}, state, {result: "Email is not unique."})
	case RESET_FORMS:
		return Object.assign({}, state, {result: null})
	default:
		return state
	}
}
