import { useNavigate } from 'react-router'
import { useCallback, useEffect, useState } from 'react'
import { getJWTToken } from 'common/util'

export type todoType = {
  id: number
  content: string
  checked: boolean
}

const Todo = () => {
  const navigate = useNavigate()
  const [todos, setTodos] = useState<Array<todoType>>([])
  const [newTodo, setNewTodo] = useState<string>('')
  const [todoCnt, setTodoCnt] = useState<number>(0)
  const [modiNum, setModiNum] = useState<number>(-1)
  const [modiContent, setModiContent] = useState<string>('')

  const redirect = useCallback(() => {
    const token: string = getJWTToken()
    if (token === null) navigate('/signin', { replace: true })
  }, [navigate])

  const addTodo = () => {
    const addNewTodo = {
      id: todoCnt,
      content: newTodo,
      checked: false,
    }
    setTodos([...todos, addNewTodo])
    setTodoCnt((prev) => prev + 1)
    setNewTodo('')
  }
  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const modifyTodo = (modiTodo: todoType) => {
    return (
      <div key={modiTodo.id}>
        <li>
          <label>
            <input type="checkbox" />
          </label>
          <input data-testid="modify-input" value={modiContent} onChange={(e) => setModiContent(e.target.value)} />
          <button
            data-testid="submit-button"
            onClick={() => {
              setTodos((prev) =>
                prev.map((todo) => {
                  if (modiTodo.id === todo.id) todo.content = modiContent
                  return todo
                }),
              )
              setModiNum(-1)
            }}>
            제출
          </button>
          <button data-testid="cancel-button" onClick={() => setModiNum(-1)}>
            취소
          </button>
        </li>
      </div>
    )
  }

  const drawTodos = todos.map((todo: todoType) => {
    return todo.id === modiNum ? (
      modifyTodo(todo)
    ) : (
      <li key={todo.id}>
        <label>
          <input type="checkbox" />
          <span>{todo.content}</span>
        </label>
        <button
          data-testid="modify-button"
          onClick={() => {
            setModiNum(todo.id)
            setModiContent(todo.content)
          }}>
          수정
        </button>
        <button type="button" data-testid="delete-button" onClick={() => deleteTodo(todo.id)}>
          삭제
        </button>
      </li>
    )
  })

  useEffect(() => {
    redirect()
  }, [redirect])

  return (
    <div>
      <h1>Todo</h1>
      {drawTodos}
      <input data-testid="new-todo-input" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button data-testid="new-todo-add-button" onClick={addTodo}>
        추가
      </button>
    </div>
  )
}

export default Todo
