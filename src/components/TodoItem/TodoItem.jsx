import React, { useState } from 'react'

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editText)
    }
    setIsEditing(!isEditing)
  }

  return (
    <div className="flex items-center space-x-3 p-2 bg-white shadow rounded">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-4 w-4 text-blue-600"
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 p-1 border rounded"
        />
      ) : (
        <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
          {todo.text}
        </span>
      )}
      <button
        onClick={handleEdit}
        className="px-2 py-1 text-blue-500 hover:text-blue-700"
      >
        {isEditing ? 'Guardar' : 'Editar'}
      </button>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-2 py-1 text-red-500 hover:text-red-700"
      >
        Eliminar
      </button>
    </div>
  )
}

export default TodoItem