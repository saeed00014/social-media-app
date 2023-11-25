import React, { useEffect, useState } from 'react'

import defaultAvatar from '../../../assets/images/testImg.png'
import { useSelector } from 'react-redux'

const Content = ({comment, loginUser, targetUser}) => {
  const [avatar, setAvatar] = useState(null)
  const ui = useSelector((state) => state.ui)
  const allLoginUsers = ui.allLoginUsers
  const commentUser = allLoginUsers.find((user) => user.id == comment.user_id)
  useEffect(() => {
    function getImgUrl(){
      const res = new URL(`../../../assets/avatar/${targetUser && targetUser.avatar}`, import.meta.url).href
      const urlLength = res.split('/').length
      const url = res.split('/')[urlLength - 1]
      if(url !== 'undefined') {
        setAvatar(res)
      }
      if(url == 'undefined') {
        setAvatar(null)
      }
    }
    getImgUrl()
  }, [targetUser])

  return (
    <div className={`flex ${comment.user_id == loginUser[0].id ? 'justify-end': 'justify-start gap-2'} min-w-max`}>
      {comment.user_id !== loginUser[0].id ?
        <div className='w-[40px] h-[40px] '>
          <img src={avatar ? avatar : defaultAvatar} alt="" className='object-cover h-full w-full rounded-full'/> 
        </div>
        : <></>
      }
      <p className={`relative max-w-[22rem] px-3 py-2 rounded-[1.5rem] break-words ${comment.user_id == loginUser[0].id ? 'bg-blue-700 text-left text-white': 'bg-gray-300'} overflow-visible`}>
        {comment.user_id == loginUser[0].id && 
          <span className='absolute left-0 -top-4 text-black text-[.7rem] min-w-max'>{loginUser[0] && (loginUser[0].firstName + ' ' + loginUser[0].lastName)}</span>
        }
        {comment.user_id !== loginUser[0].id && 
          <span className='absolute right-3 -top-4 text-black text-[.7rem] min-w-max'>{commentUser && (commentUser.firstName + ' ' + commentUser.lastName)}</span>
        }
        {comment.text}
      </p>
    </div>
  )
}

export default Content