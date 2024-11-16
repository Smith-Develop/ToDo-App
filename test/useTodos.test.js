import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useTodos } from '../src/hooks/useTodos'

describe('useTodos', () => {
  it('should add a todo', () => {
    const { result } = renderHook(() => useTodos())

    act(() => {
      result.current.addTodo('New Todo')
    })

    expect(result.current.todos).toHaveLength(1)
    expect(result.current.todos[0].text).toBe('New Todo')
  })

  it('should toggle todo completion', () => {
    const { result } = renderHook(() => useTodos())

    act(() => {
      result.current.addTodo('Test Todo')
      result.current.toggleTodo(result.current.todos[0].id)
    })

    expect(result.current.todos[0].completed).toBe(true)
  })
})