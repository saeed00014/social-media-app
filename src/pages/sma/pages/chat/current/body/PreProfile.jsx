import React from 'react'
import { Link } from 'react-router-dom'

import defaultAvatar from '../../../../assets/images/testImg.png'

const PreProfile = ({targetUser, avatar}) => {
  return (
    <div className='flex flex-col items-center w-full h-full pt-10 gap-2'>
      <div className='w-28 h-28'>
        <img src={avatar ? avatar : defaultAvatar} alt="" className='w-full h-full object-cover rounded-full' />
      </div>
      <div className='flex flex-col gap-4'>
        <span className='flex justify-center'>{targetUser && (targetUser[0].firstName + ' ' + targetUser[0].lastName)}</span>
        <a href={`/sma/profile/${targetUser && targetUser[0].id}`} className='flex py-2 px-4 bg-bg-hover rounded-[.5rem]'>View Profile</a>
      </div>
     </div>
  )
}

export default PreProfile