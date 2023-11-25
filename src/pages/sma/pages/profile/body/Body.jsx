import React from 'react'
import Header from './Header'
import LeftSide from './leftSIde/LeftSide'
import RightSide from './rightSide/RightSide'

const Body = ({targetUser}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 w-full'>
      <Header targetUser={targetUser} />
      <div className='flex justify-center md:items-start items-center lg:flex-row flex-col-reverse w-full lg:gap-0 md:gap-6 gap-4 lg:pt-2 pt-0 lg:px-6 md:px-2 px-0'>
        <RightSide targetUser={targetUser}/>
        <LeftSide targetUser={targetUser} />
      </div>
    </div>
  )
}

export default Body