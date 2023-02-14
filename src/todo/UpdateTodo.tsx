import { updateTodo as updateTodoApi } from '../api/todo'
import { useState } from 'react'
import { todoType } from 'common/constant'
import styles from 'style/Todo.module.css'

const UpdateTodo = (props: { todo: todoType; setTodos: Function; setUpdateId: Function }) => {
  const [updateContent, setUpdateContent] = useState<string>(props.todo.todo)
  const [isCompleted, setIsCompleted] = useState<boolean>(props.todo.isCompleted)

  const update = async (target: todoType) => {
    const res = await updateTodoApi(target)
    if (res && res.status === 200) {
      props.setTodos((prev) =>
        prev.map((todo) => {
          if (target.id === todo.id) todo.todo = updateContent
          return todo
        }),
      )
    }
  }

  const updateChecked = async (target: todoType) => {
    const res = await updateTodoApi(target)
    if (res && res.status === 200) {
      props.todo.isCompleted = !props.todo.isCompleted
      props.setTodos((prev) =>
        prev.map((todo) => {
          if (target.id === todo.id) todo.isCompleted = !todo.isCompleted
          return todo
        }),
      )
    }
  }

  return (
    <div key={props.todo.id}>
      <li>
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
        </label>
        <input
          className={styles.updateInput}
          data-testid="modify-input"
          value={updateContent}
          onChange={(e) => setUpdateContent(e.target.value)}
        />
        <button
          className={styles.updateBtn}
          data-testid="submit-button"
          onClick={() => {
            props.todo.todo = updateContent
            update(props.todo)
            props.setUpdateId(-1)
          }}>
          제출
        </button>
        <button className={styles.updateBtn} data-testid="cancel-button" onClick={() => props.setUpdateId(-1)}>
          취소
        </button>
      </li>
    </div>
  )
}

export default UpdateTodo
