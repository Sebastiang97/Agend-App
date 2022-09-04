import React, { useContext } from 'react'
import { post } from '../../api'
import { Errors } from '../../components/Errors'
import './Login.css'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../context/context'

export const Login = () => {
  const { setUser } = useContext(AuthContext)
  // const [errors, setErrors] = useState({
  //   isErrors: true,
  //   errors: [],
  // })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  })

  //emial: sebs@gmail.com
  //password: 123456
  const handleLogin = (data) => {
    const { email, password } = data
    post('/api/auth/login', {
      email: email,
      password: password,
    })
      .then((response) => {
        if (response.success) {
          setUser({ type: 'LOGIN', payload: response.user })
        }
      })
      .catch((error) => {
        console.log(error)
        // setErrors({
        //   isErrors: true,
        //   errors: error.errors,
        // })
      })
  }

  return (
    <div className='login'>
      {/* <a
        className=''
        href='https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/google'
      >
        Login with Google
      </a> */}
      <form className='' onSubmit={handleSubmit(handleLogin)}>
        <input
          type='text'
          name='email'
          {...register('email', {
            required: true,
            pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i,
          })}
        />
        <input
          type='password'
          name='password'
          {...register('password', { required: true })}
        />
        <button className=''>Iniciar sesión</button>
      </form>
      {/* <Errors errors={errors} /> */}
    </div>
  )
}
