import React from 'react'

const TodoList = ({children}) => {
  return (
    <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
      {children.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          No hay tareas pendientes
        </p>
      ) : (
        children
      )}
    </div>
  )
}

export default TodoList