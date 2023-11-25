import React from 'react'
import { Link } from 'react-router-dom'

const GuestLeftBar = () => {
  return (
    <div className='fixed left-0 top-20 flex md:min-w-[290px] min-w-[250px] h-screen p-2 pt-0 overflow-x-scroll'>
      <div className='flex flex-col items-center justify-start w-full h-full p-2 pt-0 gap-4'>
        <Link to='/sma/login' className='text-blue-700'>وارد حساب کاربری خود شوید</Link>
      </div>
    </div>
  )
}

export default GuestLeftBar