import React from 'react'

const AcountInfo = ({targetUser}) => {
  return (
    <div className='flex flex-col'>
      <span className='-mt-1'>{targetUser[0] && (targetUser[0].firstName + ' ' + targetUser[0].lastName)}</span>
      <span className='flex gap-2'>
        <small>@{targetUser[0] && targetUser[0].username}</small>
      </span>
    </div>
  )
}

export default AcountInfo