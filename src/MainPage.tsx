import { useNavigate } from 'react-router'
import { getJWTToken } from 'common/util'

const MainPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>main</h1>
      <button
        type="button"
        onClick={() => {
          navigate('/signin')
        }}>
        로그인
      </button>

      <button
        type="button"
        onClick={() => {
          navigate('/signup')
        }}>
        회원가입
      </button>

      <button
        type="button"
        onClick={() => {
          const token: string = getJWTToken()
          if (token.length > 0) navigate('/todo')
          else navigate('/signin')
        }}>
        Todo
      </button>
    </div>
  )
}

export default MainPage
