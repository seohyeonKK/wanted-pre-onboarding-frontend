import React from 'react'
import MainPage from 'MainPage'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router'
import SignIn from 'signin/SignIn'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  )
}

export default Routers
