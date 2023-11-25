import React from 'react'

import SectionWraper from '../../components/hoc'
import ImgSlider from './imgSlider'
import HomeDiscount from './discountBar'
import Category from './category'


const HomePage = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full'>
      <ImgSlider />
      <HomeDiscount />
      <Category />
    </section>
  )
}

export default SectionWraper(HomePage, 'home')