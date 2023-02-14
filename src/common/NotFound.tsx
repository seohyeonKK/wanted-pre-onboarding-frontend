import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1
        style={{
          display: 'table',
          margin: 'auto',
          marginTop: '150px',
          fontFamily: 'TTTtangsbudaejjigaeB',
          fontSize: '60px',
        }}>
        유효하지 않은 경로입니다.
      </h1>
      <button
        onClick={() => navigate('/')}
        style={{
          display: 'table',
          margin: 'auto',
          marginTop: '50px',
          fontFamily: 'TTTtangsbudaejjigaeB',
          fontSize: '50px',
          color: '#4A0BA3',
          backgroundColor: 'white',
          border: 'none',
        }}>
        👉 홈으로 돌아가기
      </button>
    </div>
  )
}

export default NotFound
