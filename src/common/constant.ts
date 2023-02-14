export const MIN_PW_LENGTH = 8
export type todoType = {
  id: number
  todo: string
  isCompleted: boolean
  userId: number
}

export enum SignInOption {
  SIGNIN = '로그인',
  SIGNUP = '회원가입',
}
