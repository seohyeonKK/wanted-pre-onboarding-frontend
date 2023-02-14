import { useCallback, useEffect, useState } from 'react'
import { MIN_PW_LENGTH, SignInOption } from 'common/constant'
import { useNavigate } from 'react-router'
import { postSignIn, postSignUp } from 'api/auth'
import { getJWTToken, setJWTToken } from 'common/util'
import styles from 'style/SignIn.module.css'

const SignIn = (props: { option: string }) => {
  const [userEmail, setUserEmail] = useState('')
  const [userPw, setUserPw] = useState('')
  const [isValid, setIsValid] = useState(false)
  const navigate = useNavigate()

  const signIn = useCallback(async () => {
    const result = await postSignIn(userEmail, userPw)
    if (result && result.status === 200) {
      setJWTToken(result.data.access_token)
      navigate('/todo')
    }
  }, [userEmail, userPw, navigate])

  const signUp = useCallback(async () => {
    const result = await postSignUp(userEmail, userPw)
    console.log(result)
    if (result && result.status === 201) {
      window.alert('회원가입이 완료되었습니다.')
      navigate('/signin')
    }
  }, [userEmail, userPw, navigate])

  const redirect = useCallback(() => {
    const token: string = getJWTToken()
    if (token) navigate('/todo', { replace: true })
  }, [navigate])

  useEffect(() => {
    redirect()
  }, [redirect])

  useEffect(() => {
    if (userEmail.includes('@') && userPw.length >= MIN_PW_LENGTH) setIsValid(true)
    else setIsValid(false)
  }, [userEmail, userPw])

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{props.option}</h1>
      <form className={styles.inputForm}>
        Email
        <input
          data-testid="email-input"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className={styles.input}
        />
        <br />
        Password
        <input
          data-testid="password=input"
          value={userPw}
          onChange={(e) => setUserPw(e.target.value)}
          type="password"
          className={styles.input}
        />
        <div className={styles.btn}>
          <button
            className={styles.signInBtn}
            type="button"
            disabled={!isValid}
            onClick={props.option === SignInOption.SIGNIN ? signIn : signUp}>
            {props.option}
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
