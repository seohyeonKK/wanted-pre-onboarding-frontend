export const getJWTToken = () => {
  const token = localStorage.getItem('JWT')
  return token ? token : ''
}

export const setJWTToken = (token: string) => {
  localStorage.setItem('JWT', token)
}
