import { useState } from 'react'
import SignInForm from 'common/SignInForm'

const SignUp = () => {
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')

  return (
    <div>
      <h1>회원가입기능입니다.</h1>
      <SignInForm userId={userId} userPw={userPw} setUserId={setUserId} setUserPw={setUserPw} />
    </div>
  )
}

export default SignUp
