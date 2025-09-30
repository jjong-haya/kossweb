import TodoItem from './TodoItem.jsx'

export default function TodoList({ todos, onToggle }) {
  if (!todos.length) return <p style={{opacity:.6}}>아직 항목이 없어요.</p>
  return (
    <ul style={{marginTop:20, paddingLeft:18}}>
      {todos.map(t => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} />
      ))}
    </ul>
  )
}
