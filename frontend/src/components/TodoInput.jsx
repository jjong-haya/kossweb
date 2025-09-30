import { useState } from 'react'

export default function TodoInput({ onAdd }) {
  const [title, setTitle] = useState('')

  const submit = async () => {
    const t = title.trim()
    if (!t) return
    await onAdd(t)
    setTitle('')
  }

  const onKey = (e) => {
    if (e.key === 'Enter') submit()
  }

  return (
    <div style={{display:'flex', gap:8}}>
      <input
        value={title}
        onChange={e=>setTitle(e.target.value)}
        onKeyDown={onKey}
        placeholder="할 일을 입력"
      />
      <button onClick={submit}>추가</button>
    </div>
  )
}
