import Send from 'api/Send'

export const postSignUp = (email: string, password: string) => {
  return Send({
    method: 'post',
    url: 'auth/signup',
    data: {
      email: email,
      password: password,
    },
  }).catch((code) => {
    if (code === 400) {
      window.alert('이미 존재하는 아이디입니다.')
      window.location.replace('/signup')
    }
  })
}

export const postSignIn = (email: string, password: string) => {
  return Send({
    method: 'post',
    url: 'auth/signin',
    data: {
      email: email,
      password: password,
    },
  }).catch((code) => {
    if (code === 404) {
      window.alert('존재하지 않는 ID입니다. 회원가입을 먼저 해주세요')
      window.location.replace('/signup')
    } else if (code === 401) {
      window.alert('비밀번호를 확인해주세요.')
    }
  })
}
