import React, { useState } from 'react'
import TodoList from './components/todolist/TodoList'
import TodoItem  from './components/TodoItem/TodoItem'
import AddTodo  from './components/AddTodo/AddTodo'
import { useTodos } from './hooks/useTodos'

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo } = useTodos()

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Todo App
          </h1>
          <div className="space-y-6">
            <AddTodo onAdd={addTodo} />
            <TodoList>
              {todos.map(todo => (
                <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
              ))}
            </TodoList>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App