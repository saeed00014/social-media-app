import React from 'react'
import AllPosts from './AllPosts'
import PostMaker from '../../../../components/post/PostMaker'
import { useSelector } from 'react-redux'

const RightSide = ({targetUser}) => {
  const ui = useSelector((state) => state.ui)
  const isMyProfile = ui.isMyProfile


  return (
    <div className='flex flex-col justify-between w-full h-full px-3 md:gap-6 gap-4'>
      {isMyProfile &&
        <PostMaker />
      }
      <div className='flex flex-col w-full gap-4 pb-6'>
        <AllPosts targetUser={targetUser} />
      </div>
    </div>
  )
}

export default RightSide