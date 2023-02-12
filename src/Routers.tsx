import MainPage from 'MainPage'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router'
import SignIn from 'signin/SignIn'
import SignUp from 'signup/SignUp'
import Todo from './todo/Todo'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  )
}

export default Routers
