
const WRITE_FILTER = 'WRITE_FILTER'
const RESET_FILTER = 'RESET_FILTER'

const filter = {
	string: ''
}

export const writeFilter = (filter) => ({type: WRITE_FILTER, filter})
export const resetFilter = () => ({type: RESET_FILTER})

export default function (state = filter, action) {
	switch (action.type) {
	case WRITE_FILTER:
		return Object.assign({}, state, {string: action.filter})
	case RESET_FILTER:
		return Object.assign({}, state, {string: ''})
	default:
		return state
	}
}
