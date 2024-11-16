import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TodoItem from '../src/components/TodoItem/TodoItem'

describe('TodoItem', () => {
  const mockTodo = {
    id: 1,
    text: 'Test todo',
    completed: false
  }

  it('renders todo text', () => {
    render(<TodoItem todo={mockTodo} onToggle={() => {}} onDelete={() => {}} onEdit={() => {}} />)
    expect(screen.getByText('Test todo')).toBeInTheDocument()
  })

  it('calls onToggle when checkbox is clicked', () => {
    const onToggle = vi.fn()
    render(<TodoItem todo={mockTodo} onToggle={onToggle} onDelete={() => {}} onEdit={() => {}} />)
    
    fireEvent.click(screen.getByRole('checkbox'))
    expect(onToggle).toHaveBeenCalledWith(1)
  })
})