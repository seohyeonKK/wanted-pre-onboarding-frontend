import { useNavigate } from 'react-router'
import { useCallback, useEffect, useState } from 'react'
import { getJWTToken, getUserId } from 'common/util'
import {
  craeteTodo as createTodoApi,
  deleteTodo as deleteTodoApi,
  getTodos as getTodosApi,
  updateTodo as updateTodoApi,
} from 'api/todo'
import Send from '../api/Send'

export type todoType = {
  id: number
  todo: string
  isCompleted: boolean
  userId: number
}

const Todo = () => {
  const navigate = useNavigate()
  const [todos, setTodos] = useState<Array<todoType>>([])
  const [todoContent, setTodoContent] = useState<string>('')
  const [updateId, setUpdateId] = useState<number>(-1)
  const [updateContent, setUpdateContent] = useState<string>('')

  const redirect = useCallback(() => {
    const token: string = getJWTToken()
    if (token) {
      Send.defaults.headers.authorization = `Bearer ${token}`
      getTodos()
    }
    if (!token) navigate('/signin', { replace: true })
  }, [navigate])

  const getTodos = async () => {
    const res = await getTodosApi()
    const userId = getUserId()
    console.log(res.data)
    if (res && res.status === 200) setTodos(res.data.filter((todo) => todo.userId === userId))
  }

  const createTodo = async () => {
    const res = await createTodoApi(todoContent)
    if (res && res.status === 201) setTodos([...todos, res.data])
    setTodoContent('')
  }

  const deleteTodo = async (id: number) => {
    const res = await deleteTodoApi(id)
    if (res) console.log(res)
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const updateTodo = async (target: todoType) => {
    const res = await updateTodoApi(target)
    if (res) console.log(res)

    setTodos((prev) =>
      prev.map((todo) => {
        if (target.id === todo.id) todo.todo = updateContent
        return todo
      }),
    )
  }

  const update = (target: todoType) => {
    return (
      <div key={target.id}>
        <li>
          <label>
            <input type="checkbox" />
          </label>
          <input data-testid="modify-input" value={updateContent} onChange={(e) => setUpdateContent(e.target.value)} />
          <button
            data-testid="submit-button"
            onClick={() => {
              updateTodo(target)
              setUpdateId(-1)
            }}>
            제출
          </button>
          <button data-testid="cancel-button" onClick={() => setUpdateId(-1)}>
            취소
          </button>
        </li>
      </div>
    )
  }

  const drawTodos = todos.map((todo: todoType) => {
    if (todo.userId === getUserId()) {
      return todo.id === updateId ? (
        update(todo)
      ) : (
        <li key={todo.id}>
          <label>
            <input type="checkbox" />
            <span>{todo.todo}</span>
          </label>
          <button
            data-testid="modify-button"
            onClick={() => {
              setUpdateId(todo.id)
              setUpdateContent(todo.todo)
              update(todo)
            }}>
            수정
          </button>
          <button type="button" data-testid="delete-button" onClick={() => deleteTodo(todo.id)}>
            삭제
          </button>
        </li>
      )
    } else return null
  })

  useEffect(() => {
    redirect()
  }, [redirect])

  return (
    <div>
      <h1>Todo</h1>
      {drawTodos}
      <input data-testid="new-todo-input" value={todoContent} onChange={(e) => setTodoContent(e.target.value)} />
      <button data-testid="new-todo-add-button" onClick={createTodo}>
        추가
      </button>
    </div>
  )
}

export default Todo
