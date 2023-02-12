import axios from 'axios'
import { JWT_TOKEN } from 'common/constant'

axios.defaults.headers.common['Authorization'] = JWT_TOKEN ? `Bearer ${JWT_TOKEN}` : ''

const instance = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    Authorization: JWT_TOKEN ? `Bearer ${JWT_TOKEN}` : '',
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
    return Promise.reject(error)
  },
)

export default instance
