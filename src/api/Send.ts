import axios from 'axios'
import { getJWTToken } from 'common/util'

const token: string = getJWTToken()

axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : ''

const instance = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
})

// set request timeout 3sec
instance.defaults.timeout = 3000

// request interceptor
instance.interceptors.request.use(
  (config) => config,
  (error) => {
    console.log(error)
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error)
    return Promise.reject(error.response.status)
  },
)

export default instance
