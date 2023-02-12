import { useEffect, useState } from 'react'
import { MIN_ID_LENGTH } from 'constants/constant'

const SignIn = () => {
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')
  const [idValid, setIdValid] = useState(false)

  useEffect(() => {
    if (userId.includes('@') && userId.length >= MIN_ID_LENGTH) setIdValid(true)
    else setIdValid(false)
  }, [userId])

  return (
    <div>
      <h1>로그인기능입니다.</h1>
      <form>
        ID <input value={userId} onChange={(e) => setUserId(e.target.value)} id="user-id" />
        <br />
        Password <input value={userPw} onChange={(e) => setUserPw(e.target.value)} type="password" id="user-pw" />
        <button type="button" disabled={!idValid}>
          제출
        </button>
      </form>
    </div>
  )
}

export default SignIn
