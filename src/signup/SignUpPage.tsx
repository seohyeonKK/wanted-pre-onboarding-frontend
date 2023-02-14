import { useCallback, useEffect, useState } from 'react'
import SignInForm from 'signin/SignInForm'
import { MIN_PW_LENGTH } from 'common/constant'
import { postSignUp } from 'api/auth'
import { useNavigate } from 'react-router'

const SignUp = () => {
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')
  const [isValid, setIsValid] = useState(false)
  const navigate = useNavigate()

  const submit = useCallback(async () => {
    const result = await postSignUp(userId, userPw)
    console.log(result)
    if (result && result.status === 201) {
      window.alert('회원가입이 완료되었습니다.')
      navigate('/signin')
    }
  }, [userId, userPw, navigate])

  useEffect(() => {
    if (userId.includes('@') && userPw.length >= MIN_PW_LENGTH) setIsValid(true)
    else setIsValid(false)
  }, [userId, userPw])

  return (
    <div>
      <h1>회원가입기능입니다.</h1>
      <SignInForm userId={userId} userPw={userPw} setUserId={setUserId} setUserPw={setUserPw} />
      <button type="button" disabled={!isValid} onClick={submit}>
        제출
      </button>
    </div>
  )
}

export default SignUp
