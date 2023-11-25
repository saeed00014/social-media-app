import React, { useEffect, useState } from 'react'

import defaultAvatar from '../../../assets/images/testImg.png'
import FollowBottun from '../../../components/FollowBottun'

const Suggestion = ({targetUser}) => {
  const [avatar, setAvatar] = useState(null)
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
    <div className='flex justify-between w-full'>
      <div className='flex items-center justify-between w-full py-2 md:px-3 px-2 gap-1 hover:bg-bg-hover'>
        <a href={`/sma/profile/${targetUser.id}`} className='flex items-center justify-start gap-2 w-full overflow-hidden'>
          <div className='md:w-[50px] md:min-w-[50px] md:h-[50px] w-[45px] min-w-[45px] h-[45px] bg-white rounded-full'>
            <img src={avatar ? avatar : defaultAvatar} alt="" className='object-cover h-full w-full rounded-full'/>
          </div>
          <div className='flex flex-col w-full text-[.8rem]'>
            <span className='overflow-hidden min-w-max'>{targetUser && (targetUser.firstName + ' ' + targetUser.lastName)}</span>
            <span>@{targetUser.username}</span>
          </div>
        </a>
        <FollowBottun targetUser={[targetUser]} />
      </div>
    </div>
  )
}

export default Suggestion