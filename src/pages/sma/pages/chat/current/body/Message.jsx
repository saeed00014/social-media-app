import React from 'react'

import defaultAvatar from '../../../../assets/images/testImg.png'

const message = ({message, loginUser, targetUser, avatar}) => { 
  return (
    <div className={`flex ${message.user_id == loginUser[0].id ? 'justify-end': 'justify-start gap-2'} min-w-max`}>
      {message.user_id !== loginUser[0].id ?
        <div className='w-[40px] h-[40px] '>
          <img src={avatar ? avatar : defaultAvatar} alt="" className='object-cover h-full w-full rounded-full'/> 
        </div>
        : <></>
      }
      <p className={`relative max-w-[22rem] px-3 py-2 rounded-[1.5rem] break-words ${message.user_id == (loginUser[0] && loginUser[0].id) && loginUser[0].id ? 'bg-blue-700 text-left text-white': 'bg-gray-300'}`}>
        {message.user_id == loginUser[0].id && 
          <span className='absolute right-3 -top-4 min-w-max text-black text-[.7rem]'>{loginUser[0] && (loginUser[0].firstName + ' ' + loginUser[0].lastName)}</span>
        }
        {message.user_id !== loginUser[0].id && 
          <span className='absolute right-3 -top-4 min-w-max text-black text-[.7rem]'>{targetUser[0] && (targetUser[0].firstName + ' ' + targetUser[0].lastName)}</span>
        }
        {message.text}
      </p>
    </div>
  )
}

export default message