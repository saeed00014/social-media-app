import React from 'react'
import Intro from './Intro'
import RecentPosts from './RecentPosts'

const LeftSide = ({targetUser}) => {
  return (
    <div className='lg:sticky lg:top-20 flex flex-col justify-between items-center w-full h-fit px-3 md:gap-6 gap-4'> 
      <Intro targetUser={targetUser} />
      <RecentPosts targetUser={targetUser} />
    </div>
  )
}

export default LeftSide