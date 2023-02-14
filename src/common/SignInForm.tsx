import { useNavigate } from 'react-router'
import { useCallback, useEffect } from 'react'
import { getJWTToken } from 'common/util'

// TODO: token 저장된 상태로 Signin->todo 이동시 번쩍임

const SignInForm = (props: { userId: string; userPw: string; setUserId: Function; setUserPw: Function }) => {
  const navigate = useNavigate()

  const redirect = useCallback(() => {
    const token: string = getJWTToken()
    if (token) navigate('/todo', { replace: true })
  }, [navigate])

  useEffect(() => {
    redirect()
  }, [redirect])

  return (
    <div>
      <form>
        ID <input value={props.userId} onChange={(e) => props.setUserId(e.target.value)} id="user-id" />
        <br />
        Password{' '}
        <input value={props.userPw} onChange={(e) => props.setUserPw(e.target.value)} type="password" id="user-pw" />
      </form>
    </div>
  )
}

export default SignInForm
