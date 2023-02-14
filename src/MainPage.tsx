import { useNavigate } from 'react-router'
import { getJWTToken } from 'common/util'
import styles from 'style/MainPage.module.css'

const MainPage = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.main}>
      <h1 className={styles.mainTitle}>My Todo 📝</h1>
      <div className={styles.menu}>
        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => {
            navigate('/signin')
          }}>
          로그인
        </button>
        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => {
            navigate('/signup')
          }}>
          회원가입
        </button>
        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => {
            const token: string = getJWTToken()
            if (token.length > 0) navigate('/todo')
            else navigate('/signin')
          }}>
          Todo
        </button>
      </div>
    </div>
  )
}

export default MainPage
