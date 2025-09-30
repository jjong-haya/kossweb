import { useEffect, useState } from 'react'
import { listTodos, createTodo, setTodoDone } from './api/todos'
import TodoInput from './components/TodoInput.jsx'
import TodoList from './components/TodoList.jsx'

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    listTodos().then(setTodos).catch(console.error)
  }, [])

  const add = async (title) => {
    const saved = await createTodo(title)
    setTodos(prev => [...prev, saved])
  }

  const toggleDone = async (id, done) => {
    const updated = await setTodoDone(id, done)
    setTodos(prev => prev.map(t => (t.id === id ? updated : t)))
  }

  return (
    <div style={{maxWidth:640, margin:'40px auto', fontFamily:'system-ui'}}>
      <h1>Todo</h1>
      <TodoInput onAdd={add} />
      <TodoList todos={todos} onToggle={toggleDone} />
    </div>
  )
}
