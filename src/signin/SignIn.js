import { useState } from 'react'
import SignInForm from 'common/SignInForm'

const SignIn = () => {
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')

  return (
    <div>
      <h1>로그인기능입니다.</h1>
      <SignInForm userId={userId} userPw={userPw} setUserId={setUserId} setUserPw={setUserPw} />
    </div>
  )
}

export default SignIn
