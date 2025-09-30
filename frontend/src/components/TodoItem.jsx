export default function TodoItem({ todo, onToggle }) {
    return (
      <li style={{display:'flex', alignItems:'center', gap:8, margin:'6px 0'}}>
        <input
          type="checkbox"
          checked={!!todo.done}
          onChange={e => onToggle(todo.id, e.target.checked)}
        />
        <span style={{textDecoration: todo.done ? 'line-through' : 'none'}}>
          {todo.title}
        </span>
        <button>삭제</button>
      </li>
    )
  }
