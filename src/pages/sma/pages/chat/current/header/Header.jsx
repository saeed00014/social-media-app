import React, { useEffect, useState } from 'react'

import defaultAvatar from '../../../../assets/images/testImg.png'

import {BiVideo} from 'react-icons/bi'
import {BiPhone} from 'react-icons/bi'
import {BiInfoCircle} from 'react-icons/bi'

const Header = ({targetUser}) => {
  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    function getImgUrl(){
      const res = new URL(`../../assets/avatar/${targetUser && targetUser[0].avatar}`, import.meta.url).href
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
    <div className='sticky top-0 flex items-center justify-between w-full min-h-[75px] xl:px-8 md:px-4 px-2 bg-white'>
      <div className='flex items-center w-full gap-3'>
        <div className='w-[50px] h-[50px]'>
          <img src={avatar ? avatar : defaultAvatar} alt="" className='w-full h-full rounded-full'/>
        </div>
        <span className='-mt-1'>
        {targetUser && (targetUser[0].firstName + ' ' + targetUser[0].lastName)}
        </span>
      </div>
      <div className='flex gap-4 text-3xl'>
        <i><BiPhone /></i>
        <i><BiVideo /></i>
        <i><BiInfoCircle /></i> 
      </div>
    </div>
  )
}

export default Header