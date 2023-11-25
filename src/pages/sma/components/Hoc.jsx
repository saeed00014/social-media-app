import React from 'react'

const HocWraper = (Component, idName) =>
function HOC() {
  return (
    <section className='flex h-full w-full xl:pr-[260px] md:pr-[88px]'>
      <Component/>
    </section>
  )
}

export default HocWraper