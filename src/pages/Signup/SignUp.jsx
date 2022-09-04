import React, { useContext } from 'react'
import { Errors } from '../../components/Errors'
import { FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { post } from '../../api'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../context/context'

export const SignUp = () => {
  const { setUser } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  })

  //name:sebastian
  //email:sebs@gmail.com
  //password:123456
  const handleSignUp = (data) => {
    const { name, email, password } = data
    console.log(name, email, password)
    post('/api/auth/signup', {
      name: email,
      email: email,
      password: password,
    })
      .then((response) => {
        if (response.success) {
          setUser({ type: 'SIGNUP', payload: response.user })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <>
      <a className='' href='#'>
        <FcGoogle /> Iniciar sesión con Google
      </a>
      <a className='' href='#'>
        <FaFacebookSquare /> Inicar sesión con facebook
      </a>

      <form className='' onSubmit={handleSubmit(handleSignUp)}>
        <input
          type='text'
          name='name'
          placeholder='name'
          {...register('name', { required: true, maxLength: 20 })}
        />
        <input
          type='text'
          name='email'
          placeholder='email'
          {...register('email', {
            required: true,
            pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i,
          })}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          {...register('password', { required: true })}
        />
        <button className=''>Registro</button>
      </form>
      {errors.name?.types?.required && 'Nombre requerido'}
      {errors.name?.types?.maxLength && 'Limite del nombre 20 caracteres'}
      {errors.password && 'Contrañse requerida'}
      {errors.email?.types?.pattern && 'Formato de email invalido'}
      {errors.email?.types?.required && 'Correo requerido'}
    </>
  )
}
