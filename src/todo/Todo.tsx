import { deleteTodo as deleteTodoApi, updateTodo as updateTodoApi } from '../api/todo'
import { todoType } from 'common/constant'
import styles from 'style/Todo.module.css'
import { useState } from 'react'

const Todo = (props: { todo: todoType; setUpdateId: Function; setTodos: Function }) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(props.todo.isCompleted)
  const deleteTodo = async (id: number) => {
    const res = await deleteTodoApi(id)
    if (res) console.log(res)
    props.setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const updateChecked = async (target: todoType) => {
    const res = await updateTodoApi(target)
    if (res) console.log(res)
    props.setTodos((prev) =>
      prev.map((todo) => {
        if (target.id === todo.id) todo.isCompleted = !todo.isCompleted
        return todo
      }),
    )
  }

  return (
    <li className={styles.todo} key={props.todo.id}>
      <label>
        <input
          className={styles.checkbox}
          type="checkbox"
          onChange={() => {
            props.todo.isCompleted = !props.todo.isCompleted
            updateChecked(props.todo)
            setIsCompleted((prev) => !prev)
          }}
          checked={isCompleted}
        />
        <span className={styles.todoContent} style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
          {props.todo.todo}
        </span>
      </label>
      <button
        className={styles.updateBtn}
        data-testid="modify-button"
        onClick={() => {
          props.setUpdateId(props.todo.id)
        }}>
        수정
      </button>
      <button
        className={styles.updateBtn}
        type="button"
        data-testid="delete-button"
        onClick={() => deleteTodo(props.todo.id)}>
        삭제
      </button>
    </li>
  )
}

export default Todo
