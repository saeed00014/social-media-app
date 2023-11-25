import React, { useEffect, useState } from 'react'

import defaultAvatar from '../../../assets/images/testImg.png'

const OnlineFriend = ({friend}) => {
  const [avatar, setAvatar] = useState(null)
  useEffect(() => {
    function getImgUrl(){
      const res = new URL(`../../../assets/avatar/${friend && friend.avatar}`, import.meta.url).href
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
  }, [friend])

  return (
    <a href={`/sma/profile/${friend && friend.id}`} className='flex items-center w-full gap-3 py-2 md:px-3 px-2 hover:bg-bg-hover overflow-x-hidden'>
      <div className='relative md:w-[50px] md:h-[50px] w-[40px] h-[40px] bg-white rounded-full'>
        <img src={avatar ? avatar : defaultAvatar} alt="" className='object-cover md:min-w-[50px] md:min-h-[50px] min-w-[45px] min-h-[45px] rounded-full' />
        <span className='absolute flex items-center justify-center -right-1 -bottom-1 bg-white w-4 h-4 rounded-full'>
          <span className='bg-green-400 w-3 h-3 rounded-full'></span>
        </span>
      </div>
      <div className='flex flex-col w-full text-[.8rem]'>
            <span className='overflow-hidden min-w-max'>{friend && (friend.firstName + ' ' + friend.lastName)}</span>
            <span>@{friend && friend.username}</span>
          </div>
    </a>
  )
}

export default OnlineFriend