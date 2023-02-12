import { useNavigate } from 'react-router'
import { useCallback, useEffect } from 'react'
import { getJWTToken } from 'common/util'

const Todo = () => {
  const navigate = useNavigate()

  const redirect = useCallback(() => {
    const token: string = getJWTToken()
    if (token === null) navigate('/signin', { replace: true })
  }, [navigate])

  useEffect(() => {
    redirect()
  }, [redirect])
  return (
    <div>
      <h1>Todo</h1>
    </div>
  )
}

export default Todo
