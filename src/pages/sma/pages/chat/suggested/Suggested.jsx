import React from 'react'
import Header from './header/Header'
import Scroller from './scroller/Scroller'

const Suggested = () => {
  return (
    <div className='lg:flex hidden flex-col min-w-[360px] border-l-[1px] bg-white'>
      <Header />
      <Scroller />
    </div>
  )
}

export default Suggested