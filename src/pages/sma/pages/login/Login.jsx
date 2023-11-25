import React, { useRef, useState } from 'react'
import { login } from '../../services/user'
import { useDispatch } from 'react-redux'

const Login = ({setShowSignUp}) => {
  const [loginErorrMessage, setLoginErorrMessage] = useState(false)

  const ref = useRef()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = ref.current.email.value
    const password = ref.current.password.value
    const url = 'http://127.0.0.1:8000/api/auth/login'
    
    if(email == "" || password == "") {
      setLoginErorrMessage(true)
    }
    if(email !== "" && password !== "") {
      async function tokenMaker() {
        const data = await login(url, email, password)
        if(data) {
          localStorage.setItem('token', data.token)
          localStorage.setItem('user', JSON.stringify([data.user]))
          setLoginErorrMessage(false)
          location.reload()
        }
        if(!data) {
          setLoginErorrMessage(true)
        }
      }
      tokenMaker()
    }
  
  }

  return (
    <div className='flex flex-col gap-3 w-full bg-white shadow-3xl py-4 md:px-4 px-3 rounded-[.5rem] z-10 max-w-[392px]'>
      <form onSubmit={(e) => handleSubmit(e)} ref={ref} className='flex flex-col gap-3 w-full [&>input]:bg-bg-hover [&>input]:h-[52px] [&>input]:w-full [&>input]:max-w-[368px] [&>input]:px-3 [&>input]:pb-1'>
        <input type="name" id='email' name='email' placeholder='ایمیل'/>
        <input id='password' name='password' type='password' placeholder='رمز عبور'/>
        {loginErorrMessage &&
          <span className='text-text-error -my-2 text-[.95rem]'>ایمیل یا رمز عبور صحیح نیست</span>
        }
        <div className='flex flex-col items-center justify-between w-full pt-2 gap-3'>
          <input type="submit" value='ورود' className='bg-blue-600 w-full h-12 pb-1 text-white rounded-[.3rem] cursor-pointer'/>
        </div>
      </form>
      <div className='flex flex-col items-center justify-between pt-2 gap-3'>
          <button className='w-full h-10 text-[.8rem] text-blue-800 pb-1 border-b-2'>رمز عبور را فراموش کرده ام</button>
          <button onClick={() => setShowSignUp(true)} to='/signup' className='bg-green-500 hover:bg-green-600 w-[200px] h-12 text-white rounded-[.3rem] md:mt-4 mt-2'>تبت نام</button>
      </div>
    </div>
  )
}

export default Login