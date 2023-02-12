import Send from 'api/Send'

export const postSignUp = (email: string, password: string) => {
  return Send({
    method: 'post',
    url: 'auth/signup',
    data: {
      email: email,
      password: password,
    },
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
  })
}
