const SignInForm = (props: { userId: string; userPw: string; setUserId: Function; setUserPw: Function }) => {
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
