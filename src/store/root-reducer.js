import { combineReducers } from 'redux'
import { todos } from './todos/todo-reducer'

export const rootReducer = combineReducers({
	todos,
})
