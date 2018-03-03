import { composeWithDevTools } from 'redux-devtools-extension'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import contacts from './contacts'
import formValidator from './formValidator.js'

const reducer = combineReducers({contacts, formValidator})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, composeWithDevTools(middleware))

export default store
export * from './contacts'
export * from './formValidator'
