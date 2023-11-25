import React from 'react'
import MassegeContainer from './MessageContainer'
import SendBar from './SendBar'

const Body = ({targetUser, loginUser}) => {
  return (
    <div className='flex flex-col justify-between h-full xl:px-8 md:px-4 px-2'>
      <div className='flex h-full overflow-y-scroll'>
        <MassegeContainer targetUser={targetUser} loginUser={loginUser}/>
      </div>
      <div className='sticky md:bottom-0 bottom-[60px] flex items-center justify-center h-fit bg-bg-theme-body py-3'>
        <SendBar targetUser={targetUser} />
      </div>
    </div>
  )
}

export default Body