import { v4 as uuidv4 } from 'uuid'
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './todo-actions'

export const todos = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO: {
			const newTodo = {
				id: uuidv4(),
				text: action.todo,
				isCompleted: false,
			}

			return [...state, newTodo]
		}
		case TOGGLE_TODO: {
			return state.map(todo =>
				todo.id === action.id
					? { ...todo, isCompleted: !todo.isCompleted }
					: todo
			)
		}
		case REMOVE_TODO: {
			return state.filter(todo => todo.id !== action.id)
		}
		default: {
			return state
		}
	}
}
