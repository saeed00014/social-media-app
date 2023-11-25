import React from 'react'

import HomePage from '../pages/home/Home'

const GuestLayout = () => {
  return (
    <section className='flex flex-col w-full'>
      <HomePage props='guest'/>
    </section>
  )
}

export default GuestLayout