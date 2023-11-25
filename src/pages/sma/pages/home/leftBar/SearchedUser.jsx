import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import defaultAvatar from '../../../assets/images/testImg.png'

const SearchedUser = ({result}) => {
  const [avatar, setAvatar] = useState(null)
  useEffect(() => {
    function getImgUrl(){
      const res = new URL(`../../../assets/avatar/${result && result.avatar}`, import.meta.url).href
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
  }, [result])

  return (
    <div className='flex justify-between w-[259px]'>
      <div className='flex items-center justify-start w-full py-3 px-3 gap-3 hover:bg-bg-hover'>
        <Link to={`/sma/profile/${result.id}`} className='flex items-center justify-start gap-2 w-[60%] '>
          <div className='md:w-[50px] md:min-w-[50px] md:h-[50px] w-[45px] min-w-[45px] h-[45px]'>
            <img src={avatar ? avatar : defaultAvatar} alt="" className='object-cover h-full w-full rounded-full'/>
          </div>
          <div className='flex flex-col items-start w-full min-w-max md:text-[1rem] text-[.9rem] '>
            <span>{result.firstName + ' ' + result.lastName}</span>
            <span>@{result.username}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SearchedUser