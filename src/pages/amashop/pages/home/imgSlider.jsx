import React, { useEffect, useState } from 'react'

import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

import { headerImg } from '../../data/data'

const ImgSlider = () => {
  const [active, setActive] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      const aaa = (
        (active <= 1
          ? 6
          : active - 1 
        ) + 'ff'
      ).toString() 

      document.getElementById(aaa).click()
    }, 5000)
    return () => clearInterval(interval)
  }, [active])

  const incrumentActive = () => {
    setActive(
      active <= 5 
        ? (active) => active + 1 
        : 1
      )
  }
  
  const decrumentActive = () => {
    setActive (
      active <= 1 
        ? 6 
        : (active) => active - 1  
    )
  }

  const imgNavigator = (index) => {
    setActive(index)
  }
  
  return (
    <div className='relative flex items-center w-screen overflow-x-scroll overflow-y-hidden'>
      <div className='relative flex w-screen xl:h-[25rem] lg:h-[24rem] md:h-[20rem] h-[18rem] border-b-[2px] overflow-visible'>
        {headerImg.map((img) => {
          return (
            <img src={img.img} alt='' id={img.index} className= {`absolute ${active == img.index ? 'z-20' : 'z-10' } transition-all duration-100 object-cover w-full h-full`} />
            )
          })}
      </div>
      <div className='absolute bottom-[10%] flex justify-center w-full'>
        <div className='flex items-center justify-center w-32 h-3 px-1 bg-g_Border_Shaded_Shop rounded-full z-30'>
          {headerImg.map((img) => {
            return (
              <button id={`${img.index}ff`} onClick={() => imgNavigator(img.index)} className='flex items-center justify-center w-full h-full'>
                <span className={`flex h-1 ${active == img.index ? 'w-3' : 'w-1'} bg-g_Background_Shaded_Shop rounded-full transition-all duration-300`}>
                </span>
              </button>
            )
          })}
        </div>
      </div>
      <div className='absolute bottom-[15%] sm:right-[10%] right-1 sm:scale-100 scale-90  flex gap-2 z-30'>
        <button onClick={decrumentActive} className='flex items-center justify-center w-10 h-10 rounded-full bg-g_Text_White cursor-pointer'>
          <BsArrowRightShort className='text-2xl' />
        </button>
        <button onClick={incrumentActive} className='flex items-center justify-center w-10 h-10 rounded-full bg-g_Text_White cursor-pointer'>
          <BsArrowLeftShort className='text-2xl'/>
        </button>
      </div>
    </div>
  )
}

export default ImgSlider