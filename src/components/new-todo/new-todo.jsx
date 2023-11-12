import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/todos/todo-actions'

import './style.scss'

const NewTodo = () => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const onSubmit = e => {
		e.preventDefault()
		if (value) {
			dispatch(addTodo(value))
			setValue('')
		}
	}

	return (
		<form className='new-todo' onSubmit={e => onSubmit(e)}>
			<input
				className='new-todo__input'
				type='text'
				placeholder='New todo'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button className='new-todo__btn' type='submit'>
				Add
			</button>
		</form>
	)
}

export default NewTodo
