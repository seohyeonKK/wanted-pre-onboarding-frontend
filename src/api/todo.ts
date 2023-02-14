import Send from 'api/Send'
import { todoType } from 'todo/Todo'

export const craeteTodo = (content: string) => {
  return Send({
    method: 'post',
    url: 'todos',
    data: {
      todo: content,
    },
  }).catch((code) => {
    if (code === 400) window.alert('추가할 내용을 입력해주세요.')
  })
}

export const getTodos = () => {
  return Send({
    method: 'get',
    url: 'todos',
  })
}

export const updateTodo = (todo: todoType) => {
  return Send({
    method: 'put',
    url: `todos/${todo.id}`,
    data: {
      todo: todo.todo,
      isCompleted: todo.isCompleted,
    },
  })
}

export const deleteTodo = (id: number) => {
  return Send({
    method: 'delete',
    url: `todos/${id}`,
  })
}
