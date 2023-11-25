import React from 'react'

const NotIntrest = ({handleNotIntrest}) => {
  return (
    <div className='fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-gray-700/50 z-50'>
      <div className='flex flex-col items-center justify-between w-[20rem] border-t-2 border-x-2 bg-white rounded-[1rem] [&>*:last-child]:rounded-b-[1rem] [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:w-full [&>*]:p-2 [&>*]:h-[48px] [&>*]:border-b-2 [&>*]:cursor-pointer'>
        <button>Report</button>
        <button>Add favorites</button>
        <button>Go to posts</button>
        <button>About this acount</button>
        <button onClick={handleNotIntrest}>Cancel</button>
      </div>
    </div>
  )
}

export default NotIntrest