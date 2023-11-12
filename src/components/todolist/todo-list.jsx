import { useSelector } from 'react-redux'

import TodoItem from '../todo-item/todo-item'
import { selectTodos } from '../../store/todos/todo-selectors'

import './style.scss'

const TodoList = () => {
	const todos = useSelector(selectTodos)

	return (
		<ul className='todo__list'>
			{todos.map(todo => (
				<TodoItem todo={todo} key={todo.id} />
			))}
		</ul>
	)
}

export default TodoList
