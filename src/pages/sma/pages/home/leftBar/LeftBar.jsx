import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import SuggestedFriends from './SuggestedFriends'
import OnlineFriends from './FriendsList'

import {FaUserFriends} from 'react-icons/fa'

const LeftBar = () => {
  const [leftBar, setLeftBar] = useState(false)

  return (
    <div className={`fixed ${leftBar ? 'left-0' : 'lg:left-0 lg:max-h-screen max-h-[63px] md:-left-[290px] -left-[250px]'} transition-all duration-200 top-0 flex items-start min-w-[290px] md:pb-0 pb-14 h-screen z-40`}>
      <div className='lg:hidden flex items-center h-[63px] text-white md:ml-4 ml-2'>
        <button  onClick={() => setLeftBar(!leftBar)}className='flex items-center md:gap-3 gap-2 bg-green-500 hover:bg-green-600 rounded-full md:px-3 px-2 md:py-2 py-[.4rem]'>
          <span className='relative flex items-center justify-center font-normal w-3 h-full [&>i]:bg-white'>
            <i className={`absolute w-[.1rem] h-2 mb-[.37rem] ${leftBar ? 'rotate-45' : '-rotate-45'} bg-black`}></i>  
            <i className={`absolute w-2 h-[.1rem] mt-[.36rem] ${leftBar ? 'rotate-45' : '-rotate-45'} bg-black`}></i>  
          </span>
          <span className='md:text-2xl text-[1.4rem]'><FaUserFriends /></span>
        </button>
      </div>
      <div className='flex md:px-2 px-1 py-0 h-full bg-white border-r-[1px] md:max-w-[290px] max-w-[250px]'>
        <div className='flex flex-col w-full h-full pt-0 gap-2'>
          <div className='sticky top-0 left-0 py-[.7rem] px-2 -mb-2 z-50'>
            <SearchBar />
          </div>
          <div className='flex flex-col overflow-y-scroll px-2 md:py-[.8rem] py-[.4rem] md:gap-6 gap-4 h-full z-40 '>
            <SuggestedFriends />
            <OnlineFriends />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar