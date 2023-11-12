import { useDispatch } from 'react-redux'

import { removeTodo, toggleTodo } from '../../store/todos/todo-actions'

import './style.scss'

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch()

	const textStyle = todo.isCompleted ? { textDecoration: 'line-through' } : null

	return (
		<li className='todo-item'>
			<input
				className='todo-item__checkbox'
				type='checkbox'
				checked={todo.isCompleted}
				onChange={() => dispatch(toggleTodo(todo.id))}
			/>
			<span className='todo-item__title' style={textStyle}>
				{todo.text}
			</span>
			<button
				className='todo-item__close'
				onClick={() => dispatch(removeTodo(todo.id))}
			>
				&times;
			</button>
		</li>
	)
}

export default TodoItem
