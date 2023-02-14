import { useNavigate } from 'react-router'
import { useCallback, useEffect, useState } from 'react'
import { getJWTToken, getUserId, removeJWTToken } from 'common/util'
import { craeteTodo as createTodoApi, getTodos as getTodosApi } from 'api/todo'
import Send from 'api/Send'
import UpdateTodo from 'todo/UpdateTodo'
import Todo from 'todo/Todo'
import { todoType } from 'common/constant'
import styles from 'style/Todo.module.css'

const TodoPage = () => {
  const navigate = useNavigate()
  const [todos, setTodos] = useState<Array<todoType>>([])
  const [todoContent, setTodoContent] = useState<string>('')
  const [updateId, setUpdateId] = useState<number>(-1)

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
    if (res && res.status === 200) setTodos(res.data.filter((todo) => todo.userId === userId))
  }

  const createTodo = async () => {
    const res = await createTodoApi(todoContent)
    if (res && res.status === 201) setTodos([...todos, res.data])
    setTodoContent('')
  }

  const drawTodos = todos.map((todo: todoType) => {
    if (todo.userId === getUserId()) {
      return todo.id === updateId ? (
        <div className={styles.todos} key={todo.id}>
          <UpdateTodo todo={todo} setTodos={setTodos} setUpdateId={setUpdateId} />
        </div>
      ) : (
        <div className={styles.todos} key={todo.id}>
          <Todo todo={todo} setUpdateId={setUpdateId} setTodos={setTodos} />
        </div>
      )
    } else return null
  })

  useEffect(() => {
    redirect()
  }, [redirect])

  return (
    <div className={styles.main}>
      <img
        className={styles.logout}
        src={'https://cdn-icons-png.flaticon.com/128/660/660350.png'}
        onClick={() => {
          removeJWTToken()
          navigate('/')
        }}
      />

      <h1 className={styles.title}>My Todo List</h1>
      <form className={styles.inputForm}>
        <input
          className={styles.input}
          data-testid="new-todo-input"
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
        />
        <button type="button" className={styles.createBtn} data-testid="new-todo-add-button" onClick={createTodo}>
          추가
        </button>
      </form>
      {drawTodos}
    </div>
  )
}

export default TodoPage
