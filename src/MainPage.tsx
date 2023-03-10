import { useNavigate } from 'react-router'
import { getJWTToken } from 'common/util'
import styles from 'style/MainPage.module.css'

const MainPage = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.main}>
      <h1 className={styles.mainTitle}>My Todo π</h1>
      <div className={styles.menu}>
        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => {
            navigate('/signin')
          }}>
          λ‘κ·ΈμΈ
        </button>
        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => {
            navigate('/signup')
          }}>
          νμκ°μ
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
