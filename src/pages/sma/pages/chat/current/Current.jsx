import React from 'react'
import Header from './header/Header'
import Body from './body/Body'

const Current = ({targetUser, loginUser}) => {
  return (
    <div className='flex flex-col w-full h-full'>
      <Header targetUser={targetUser} />
      <Body targetUser={targetUser} loginUser={loginUser}/>
    </div>
  )
}

export default Current