import { useNavigate } from 'react-router'

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
    </div>
  )
}

export default MainPage
