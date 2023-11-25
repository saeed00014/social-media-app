import React, { useEffect, useState } from 'react'

import { createFriend, deleteFriend, getOneFriend  } from '../services/friend' 
import { useSelector } from 'react-redux'

const FollowBottun = ({targetUser}) => {
  const [followBtn, setFollowBtn] = useState('دنبال کردن')
  const ui = useSelector((state) => state.ui)
  const loginUser = ui.loginUser
  
  useEffect(() => {
    const url = ((targetUser[0] && loginUser[0]) && `http://127.0.0.1:8000/api/friends/f/${loginUser[0].id}=${targetUser[0].id}`)
    async function getOneFriendFunc() {
      const result = (targetUser[0] && loginUser[0]) && await getOneFriend(url)
      if(result[0] && result[0].friend_id == targetUser[0].id) {
        setFollowBtn('دنبال شده')
      }
    }
    getOneFriendFunc()
  }, [])

  const handleFollow = () => {
    const url = 'http://127.0.0.1:8000/api/friends'
    const user_id = loginUser[0] && loginUser[0].id
    const friend_id = targetUser[0] && targetUser[0].id
    async function createGetFriendFunc() {
      const result = await createFriend(url, user_id, friend_id)
      if(result[0]) {
        setFollowBtn('دنبال شده')
      }
    }
    createGetFriendFunc()
  }

  const handleUnFollow = () => {
    const url = `http://127.0.0.1:8000/api/friends/${targetUser[0] && targetUser[0].id}`
    async function createGetFriendFunc() {
      const result = await deleteFriend(url)
      if(result) {
        setFollowBtn('دنبال کردن')
      }
    }
    createGetFriendFunc()
  }

  return (
    <button onClick={followBtn == 'دنبال کردن' ? handleFollow : handleUnFollow} className='flex items-center justify-center min-w-max font-medium md:px-2 px-[.4rem] pt-1 pb-2 md:text-[.8rem] text-[.8rem] rounded-[.4rem] cursor-pointer bg-green-500 hover:bg-green-600 text-white'>
      {followBtn}
    </button>
  )
}

export default FollowBottun