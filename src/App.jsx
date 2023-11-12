import React from 'react'
import NewTodo from './components/new-todo/new-todo'
import TodoList from './components/todolist/todo-list'

const App = () => {
	return (
		<div className='app'>
			<NewTodo />
			<TodoList />
		</div>
	)
}

export default App
