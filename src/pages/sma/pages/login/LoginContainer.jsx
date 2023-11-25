import React, { useState } from 'react'
import Login from './Login'
import HocWraper from '../../components/Hoc'
import SignupContainer from './SignupContainer'

const LoginContainer = () => {
  const [showSignUp, setShowSignUp] = useState('')

  return (
    <section className='relative flex flex-col justify-center items-center h-screen w-screen md:px-4 px-2'>
      <div className='absolute top-0 flex flex-col justify-center m-10 mt-[10vh]'>
        <h1 className='text-blue-700 md:text-3xl text-2xl min-w-max'>SMA - Social Media App</h1>
        <p className='flex justify-center w-full text-2xl mt-3'>Welcome to SMA</p>
      </div>
      <Login setShowSignUp={setShowSignUp}/>
      {showSignUp && <SignupContainer setShowSignUp={setShowSignUp} />}
    </section>
  )
}

export default LoginContainer