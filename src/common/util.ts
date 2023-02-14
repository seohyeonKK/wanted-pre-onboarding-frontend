export const getJWTToken = () => {
  const token = localStorage.getItem('JWT')
  return token ? token : ''
}

export const setJWTToken = (token: string) => {
  localStorage.setItem('JWT', token)
}

export const getUserId = () => {
  const token = getJWTToken()
  if (token) {
    const payload = token.split('.')[1]
    return JSON.parse(window.atob(payload))['sub']
  }
}
