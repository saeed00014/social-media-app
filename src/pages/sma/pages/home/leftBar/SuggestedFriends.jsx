import React from 'react'
import Suggestion from './suggestion'
import { useSelector } from 'react-redux'

const SuggestedFriends = () => {
  const ui = useSelector((state) => state.ui)
  const loginUser = ui.loginUser
  const allSuggestedFriends = ui.allSuggestedFriends
  const allLoginUsersMinosMy = allSuggestedFriends && loginUser[0] && allSuggestedFriends.filter((user) => user.id !== loginUser[0].id )
  return (
    <div className='flex flex-col w-full bg-bg-theme-darker rounded-[1rem] z-40'>
      <h3 className='font-bold md:text-[1.2rem] text-[1rem] p-2 '>
        پیشنهاد های شما
      </h3>
      <div className='flex flex-col '>
        {allLoginUsersMinosMy && allLoginUsersMinosMy.map((targetUser) => {
          return (
            <Suggestion targetUser={targetUser} loginUser={loginUser} />
          )
        })}
      </div>
      <button className='flex p-2 pb-3 hover:bg-bg-hover rounded-b-[1rem] text-[.8rem] font-bold cursor-pointer'>
        نشان دادن همه
      </button>
    </div>
  )
}

export default SuggestedFriends