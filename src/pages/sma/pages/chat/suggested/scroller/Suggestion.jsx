import React, { useEffect, useState } from 'react'

import defaultAvatar from '../../../../assets/images/testImg.png'

const Suggestion = ({user}) => {
  const [avatar, setAvatar] = useState(null)
  useEffect(() => {
    function getImgUrl(){
      const res = new URL(`../../../../assets/avatar/${user && user.avatar}`, import.meta.url).href
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
  }, [user])

  return (
    <a href={`/sma/chat/${user.id}`} className='flex items-center py-2 px-6 gap-4 hover:bg-bg-hover'>
      <div className='w-14 h-14'>
        <img src={avatar ? avatar : defaultAvatar} alt="" className='w-full h-full rounded-full' />
      </div>
      <div className='flex flex-col'>
        <span className='-mt-1'>{user && (user.firstName + ' ' + user.lastName)}</span>
        <small>هیچ پیامی ارسال نشده است .</small>
      </div>
    </a>
  )
}

export default Suggestion