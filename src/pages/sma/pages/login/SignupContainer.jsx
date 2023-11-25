import React from 'react'
import Singnup from './Singnup'

const SignupContainer = ({setShowSignUp}) => {
  return (
    <section className='fixed right-0 flex justify-center items-center h-screen w-screen md:px-4 px-2 bg-gray-50/75 z-30'>
      <Singnup  setShowSignUp={setShowSignUp}/>
    </section>
  )
}

export default SignupContainer