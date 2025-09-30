export async function listTodos() {
  const res = await fetch('/api/todos')
  if (!res.ok) throw new Error('Failed to fetch')
    return res.json()
}

export async function createTodo(title) {
  const res = await fetch('/api/todos', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({title})
  })
  if (!res.ok) throw new Error('Failed to create')
     return res.json()
}


export async function setTodoDone(id, done) {
  const res = await fetch(`/api/todos/${id}/done`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({done})
  })
  if (!res.ok) throw new Error('Failed to update')
     return res.json()
}
