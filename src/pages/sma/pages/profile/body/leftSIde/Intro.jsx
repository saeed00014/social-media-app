import React from 'react'

const Intro = ({targetUser}) => {
  return (
    <div className='flex flex-col w-full max-w-[800px] gap-1 py-2 pb-4 px-3 shadow-3xl rounded-[.6rem] bg-white'>
      <div>
        <span>درباره</span>
      </div>
      <div>
        <span>{targetUser[0] && (targetUser[0].firstName + ' ' + targetUser[0].lastName)}</span>
      </div>
    </div>
  )
}

export default Intro