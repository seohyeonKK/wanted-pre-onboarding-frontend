import { useCallback, useEffect, useState } from 'react'
import SignInForm from 'signin/SignInForm'
import { MIN_PW_LENGTH } from 'common/constant'
import { useNavigate } from 'react-router'
import { postSignIn } from 'api/auth'
import { setJWTToken } from 'common/util'

const SignIn = () => {
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')
  const [isValid, setIsValid] = useState(false)
  const navigate = useNavigate()

  const submit = useCallback(async () => {
    const result = await postSignIn(userId, userPw)
    if (result && result.status === 200) {
      setJWTToken(result.data.access_token)
      navigate('/todo')
    }
  }, [userId, userPw, navigate])

  useEffect(() => {
    if (userId.includes('@') && userPw.length >= MIN_PW_LENGTH) setIsValid(true)
    else setIsValid(false)
  }, [userId, userPw])

  return (
    <div>
      <h1>로그인기능입니다.</h1>
      <SignInForm userId={userId} userPw={userPw} setUserId={setUserId} setUserPw={setUserPw} />
      <button type="button" disabled={!isValid} onClick={submit}>
        제출
      </button>
    </div>
  )
}

export default SignIn
