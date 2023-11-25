import React from 'react'
import PostCard from '../PostCard'
import CommentBottom from './Bottom'

const Comment = ({post, handleSetComment, targetUser}) => {
  
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-400/25 z-50 py-4 px-10 '>
      <div className='flex flex-col w-full h-full max-h-[800px] max-w-[700px] bg-white overflow-y-scroll rounded-[.6rem]'>
        <header className='sticky top-0 bg-white flex justify-center items-center w-full px-4 min-h-[70px] text-[1.3rem] gap-3 z-50 border-b-[1px]'>
          <h1>{targetUser && (targetUser.firstName + ' ' + targetUser.lastName)}</h1>
          <div className='absolute left-4'>
            <button onClick={handleSetComment} className='relative flex items-center justify-center font-normal w-10 h-10 bg-gray-300 rounded-full hover:bg-bg-hover'>
                <i className='absolute w-[.1rem] h-5 rotate-45 bg-black'></i>  
                <i className='absolute w-5 h-[.1rem] rotate-45 bg-black'></i>  
            </button>
          </div>
        </header>  
        <div>
          <PostCard post={post} edition='comment' handleSetCommentCall={handleSetComment}/>
        </div>
        <div className='h-full bg-bg-theme-body'>
          <CommentBottom post={post} targetUser={targetUser}/>
        </div>
      </div>
    </div>
  )
}

export default Comment