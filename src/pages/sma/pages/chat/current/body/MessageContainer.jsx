import React, { useEffect, useState } from 'react'
import Massege from './Message'
import PreProfile from './PreProfile'
import { useSelector } from 'react-redux'

const MassegeContainer = ({targetUser, loginUser}) => {
  const ui = useSelector((state) => state.ui)
  const allMessages = ui.allMessages
  const [avatar, setAvatar] = useState(null)
  
  useEffect(() => {
    function getImgUrl(){
      const res = new URL(`../../../../assets/avatar/${targetUser && targetUser[0].avatar}`, import.meta.url).href
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
    <div className='flex flex-col w-full gap-4 pt-4 pb-56'>
      {!allMessages[0] ? <PreProfile targetUser={targetUser} avatar={avatar} /> :
        allMessages.map((message) => {
          return ( 
            <Massege message={message} loginUser={loginUser} targetUser={targetUser} avatar={avatar}/>
          )
        })
      }
    </div>
  )
}

export default MassegeContainer