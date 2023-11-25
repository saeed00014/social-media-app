import styles from '../styles'

import React, { useState } from 'react'
import { navLinks } from '../data/data'
import { Link } from 'react-router-dom'

const Header = () => {
  const [active, setActive] = useState(window.location.href)
  const [hamb, setHamb] = useState(false)
  
  return (
    <nav className={`${styles.paddingX} w-full h-[80px] flex justify-center fixed top-0 left-0 z-50 bg-g_Background_Black`}>
      <div className={`w-full h-full flex items-center max-w-[1400px] py-5`}>
        <div className='flex items-center w-full h-full gap-[10px]'>
        <Link to='/' onClick={() => setActive('')} className='font-primary text-5xl'>
          Saeed
        </Link>
        </div>
        <ul className={`hidden sm:flex justify-between w-full max-w-[400px]`}>
          {navLinks.map((link) => {
            return (
              <Link key={link.name} to={`${link.link}`} onClick={() => setActive(link.link)} className={`relative ${active.includes(link.link) ? 'text-g_Button_Active' : 'text-g_Text_White'} flex items-center justify-center text-[20px] after:content-['_'] after:absolute after:-bottom-1 after:flex after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-200 after:bg-g_Button_Active`}>
                {link.name}
              </Link>
            )
          })}
        </ul>
        <div className='sm:hidden flex justify-end w-full'>
          <div onClick={() => setHamb(!hamb)} className='relative flex flex-col items-end justify-center h-5 w-9 gap-[5px] cursor-pointer'>
            <span className={`absolute top-0 h-[2px] ${hamb ? ' w-7 rotate-45 top-[45%]' : ' w-5'} bg-white transition-all ease-in-out duration-500`}></span>
            <span className={`absolute right-0 ${hamb ? 'w-0' : 'w-9'}  h-[2px] bg-white transition-all ease-in-out duration-200`}></span>
            <span className={`absolute bottom-0 h-[2px] ${hamb ? 'w-7 -rotate-45 bottom-[45%]' : 'w-7'} bg-white transition-all ease-in-out duration-500`}></span>
          </div>
          <ul className={`fixed top-[80px] md:hidden flex ${hamb ? 'right-0' : '-right-full'} transition-all duration-500 flex-col items-end w-full h-full bg-g_Background_Element pt-28 gap-16`}>
            {navLinks.map((link) => {
              return (
                <div key={link.name} className='flex w-full items-center justify-center gap-4'>
                  <Link to={`${link.link}`} onClick={() => {setActive(link.link), setHamb(false)}} className={`relative flex items-center justify-center h-8 text-g_Text_Black font-[600] text-4xl`}>
                  <span className={`absolute -left-6 ${active.includes(link.link) ? 'flex' : 'hidden'} w-3 h-3 bg-g_Text_Black rounded-full`}></span>
                    {link.name}
                  </Link>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header