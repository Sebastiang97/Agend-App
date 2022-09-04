import React, { useReducer } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import { Login } from './pages/Login/Login'
import './App.css'
// import { Navbar } from './components/Navbar/Navbar'
// import Home from './components/Home/Home'
// import { SignUp } from './pages/Signup/SignUp'
import { AppRouter } from './routers/AppRouter'
import authReducer, { initialState } from './reducers/authReducer'
import { AuthContext } from './context/context'

export const AgendApp = () => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        logged: state.logged,
        setUser: dispatch,
      }}
    >
      <AppRouter />
      {/* <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes> */}
    </AuthContext.Provider>
  )
}
