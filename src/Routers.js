import React from 'react'
import MainPage from 'MainPage'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router'
import SignIn from 'signin/SignIn'
import SignUp from 'signup/SignUp'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default Routers
