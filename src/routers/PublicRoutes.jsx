import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/context'
import { Login } from '../pages/Login/Login'
import { SignUp } from '../pages/Signup/SignUp'

export const PublicRoutes = () => {
  const { logged } = useContext(AuthContext)

  return (
    <>
      {logged ? (
        <Navigate to='/dashboard/home' />
      ) : (
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='/' element={<Login />} />
        </Routes>
      )}
    </>
  )
}
