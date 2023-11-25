import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../../../../components/post/PostCard'

const AllPosts = ({targetUser}) => {
  const ui = useSelector((state) => state.ui)
  const allTargetUserPosts = ui.alltargetUserPosts
  
  return (
    <div className='flex flex-col w-full md:gap-6 gap-4'>
      {allTargetUserPosts[0] ? allTargetUserPosts.map((post) => {
        return (
          <PostCard post={post}  targetUser={targetUser[0]}/>
        )
      })
      :
      <div className='flex justify-center w-full'>
        <div className='flex justify-center py-2 pb-4 px-3 w-full shadow-3xl rounded-[.6rem] max-w-[800px] bg-white'>هیچ پستی وجود ندارد</div>
      </div> 
      }
    </div>
  )
}

export default AllPosts