import React from 'react'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center space-x-3 p-2 bg-white shadow rounded">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-4 w-4 text-blue-600"
      />
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        Eliminar
      </button>
    </div>
  )
}

export default TodoItem