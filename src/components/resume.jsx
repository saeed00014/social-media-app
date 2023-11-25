import React from 'react'

import SideLoadingCommponent from './loading'

import persian from '../assets/images/perres.png'

const ResumeComponent = () => {

  return (
    <div className='flex w-full h-full'>
      <SideLoadingCommponent />
      <img src={persian} alt='persian resume' />
    </div>
  )
}

export default ResumeComponent