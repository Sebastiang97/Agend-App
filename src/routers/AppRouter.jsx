import { useContext } from 'react'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/context'
import { Dashboard } from './Dashboard'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {
  const { logged } = useContext(AuthContext)
  const navigate = useNavigate()
  const ejemplo = () => {
    console.log('Hello')
    logged
      ? console.log('estas logeado')
      : navigate('/auth/login', { replace: true })
    //<Navigate to='/auth/login' replace='true' /> //
  }
  return (
    // <div className={theme ? 'bg-dark text-light' : 'bg-light text-dark'}>
    <div>
      <Routes>
        <Route path='/' element={<h1>Hello</h1>} />
        <Route path='/auth/*' element={<PublicRoutes />} />

        <Route
          path='/dashboard/*'
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        />
        <Route path='*' element={<h1>Pagina no encontrada</h1>} />
      </Routes>
    </div>
  )
}
