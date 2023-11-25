import React from 'react'

import { FaRegEdit } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Header = () => {
  const ui = useSelector((state) => state.ui)
  const loginUser = ui.loginUser

  return (
    <div className='sticky top-0 flex flex-col items-center w-full bg-white'>
      <div className='flex justify-between w-full px-6 pt-6 pb-4'>
        <a href="">{loginUser[0] && (loginUser[0].firstName + ' ' + loginUser[0].lastName)}</a>
        <i className='text-2xl'><FaRegEdit /></i>
      </div>
      <div className='flex justify-between w-full px-6 py-2'>
        <span>Messages</span>
        <a href="">Requests</a>
      </div>
    </div>
  )
}

export default Header