import React, { useEffect, useState } from 'react'

import HocWraper from '../components/hoc'
import ResumeComponent from '../components/resume'

import { skill } from '../data/data'

import resume from '../assets/images/resume.pdf'

const AboutPage = () => {
  const [screen, setScreen] = useState(false)

  useEffect (() => {
    const mediaquery = window.matchMedia("(max-width: 540px)");

    setScreen(mediaquery.matches)
    
    const handleMediaquery = (event) => {
      setScreen(event.matches)
    }

    mediaquery.addEventListener("change", handleMediaquery)

    return () => {
      mediaquery.removeEventListener("change", handleMediaquery)
    }
  }, [])

  return (
    <section className='flex flex-col items-center justify-center w-screen h-full min-h-screen pt-[80px] '>
      <div className='flex lg:flex-row flex-col items-center md:justify-center w-full max-w-[1400px] h-full lg:gap-20 sm:gap-10 gap-[5vw]'>
        <div className='flex flex-col w-full sm:gap-6 gap-[2vw]'>
          <h1 className='sm:text-5xl text-4xl font-[600]'>  
            Get to know me
          </h1>
          <p className='sm:text-2xl text-[1.3rem]'>
            Im 21 Years old and started web porogramming 1year ago and im learning more about it everyday.Im looking for job opportunitys that i can grow more. i have some projects to show you more my skills and expriences.
          </p>
          <a href={resume} download className={`relative lg:flex sm:hidden flex items-center justify-center sm:w-56 sm:h-14 w-[40vw] h-[10vw] min-w-[10rem] max-w-[14rem] min-h-[2.8rem] max-h-[3.5rem] border-[1px] before:content-['_'] before:absolute before:w-full before:h-full before:bg-g_Background_Shaded before:-left-[108%] hover:before:left-0 before:transition-all before:duration-700 before:z-0 after:content-['_'] after:absolute after:w-20 after:h-full after:bg-g_Background_Shaded after:right-[87%] after:top-5 after:rotate-[50deg] hover:after:-right-12 after:transition-all after:duration-700 after:z-0 overflow-hidden`}>
            <p className='sm:text-2xl text-clamp3 z-20'>
              Resume
            </p>
          </a>
        </div>
        <ul className='flex flex-wrap justify-center sm:w-[40rem] w-full md:gap-4 gap-2'>
          {skill.map((skill) => {
            return (
              <li className={`group relative flex items-center justify-center md:p-4 p-3 bg-g_Background_Shaded rounded-2xl`}>
                <img src={skill.img} alt={skill.name} className={`object-contain md:w-[48px] md:h-[48px] w-[40px] h-[40px]`}/>
                <span className='group absolute -top-7 bg-g_Border_Shaded px-2 rotate-x-90 group-hover:rotate-x-0 transition-all duration-300'>
                  {skill.name}
                </span>
              </li>
            )
          })}
        </ul>
        <a href={resume} download className={`relative lg:hidden sm:flex hidden items-center justify-center sm:w-56 sm:h-14 w-[40vw] h-[10vw] min-w-[10rem] max-w-[14rem] min-h-[2.8rem] max-h-[3.5rem] border-[1px] before:content-['_'] before:absolute before:w-full before:h-full before:bg-g_Background_Shaded before:-left-[108%] hover:before:left-0 before:transition-all before:duration-700 before:z-0 after:content-['_'] after:absolute after:w-20 after:h-full after:bg-g_Background_Shaded after:right-[87%] after:top-5 after:rotate-[50deg] hover:after:-right-12 after:transition-all after:duration-700 after:z-0 overflow-hidden`}>
            <p className='sm:text-2xl text-clamp3 z-20'>
              Resume
            </p>
          </a>
      </div>
      <div className='hidden lg:flex-row flex-col w-full max-w-[1400px] gap-8'>
        <div className='flex flex-col w-full gap-8'>
          <h1 className='sm:text-4xl text-3xl font-[600] '>
            Download my Resume
          </h1>
          <a href={resume} download className={`relative flex items-center justify-center sm:w-56 sm:h-14 w-[40vw] h-[10vw] min-w-[10rem] max-w-[14rem] min-h-[2.8rem] max-h-[3.5rem] border-[1px] before:content-['_'] before:absolute before:w-full before:h-full before:bg-g_Background_Shaded before:-left-[108%] hover:before:left-0 before:transition-all before:duration-700 before:z-0 after:content-['_'] after:absolute after:w-20 after:h-full after:bg-g_Background_Shaded after:right-[87%] after:top-5 after:rotate-[50deg] hover:after:-right-12 after:transition-all after:duration-700 after:z-0 overflow-hidden`}>
            <p className='sm:text-2xl text-clamp3 z-20'>
              Download
            </p>
          </a>
        </div>
        <div className='w-full '>
          <ResumeComponent />
        </div>
      </div>
    </section>
  )
}

export default HocWraper(AboutPage, 'about')