import React from 'react'
import { useNavigate } from "react-router-dom";

import AcountInfo from './AcountInfo'

import {IoMdArrowForward} from 'react-icons/io'

const Header = ({targetUser}) => {
  const navigate = useNavigate();
  const handleNavBack = () => {
    
  }

  return (
    <div className='sticky top-0 flex items-center gap-3 py-2 px-3 w-full border-b-[2px] bg-white z-50'>
      <button onClick={() => navigate(-1)} className='flex border-[2px] rounded-full p-3 text-2xl hover:bg-bg-hover'>
        <IoMdArrowForward />
      </button>
      <AcountInfo targetUser={targetUser} />
    </div>
  )
}

export default Header