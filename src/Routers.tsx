import MainPage from 'MainPage'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router'
import SignInPage from 'signin/SignInPage'
import SignUpPage from 'signup/SignUpPage'
import TodoPage from './todo/TodoPage'
import NotFound from './common/NotFound'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  )
}

export default Routers
