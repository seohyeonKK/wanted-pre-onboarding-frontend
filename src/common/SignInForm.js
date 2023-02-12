import { useEffect, useState } from 'react'
import { MIN_PW_LENGTH } from 'common/constant'

const SignInForm = ({ userId, setUserId, userPw, setUserPw, submit }) => {
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    if (userId.includes('@') && userPw.length >= MIN_PW_LENGTH) setIsValid(true)
    else setIsValid(false)
  }, [userId, userPw])

  return (
    <div>
      <form>
        ID <input value={userId} onChange={(e) => setUserId(e.target.value)} id="user-id" />
        <br />
        Password <input value={userPw} onChange={(e) => setUserPw(e.target.value)} type="password" id="user-pw" />
        <button type="button" disabled={!isValid} onClick={submit}>
          제출
        </button>
      </form>
    </div>
  )
}

export default SignInForm
