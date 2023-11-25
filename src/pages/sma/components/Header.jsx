import React from 'react'

import { Link } from 'react-router-dom'
import { bottomHeaderLinks, mainHeaderLinks } from '../assets/data/data'
import AcountInfo from './AcountInfo'
import { useSelector } from 'react-redux'
import { HiOutlineLogin } from 'react-icons/hi'

const Header = () => {
  const ui = useSelector((state) => state.ui)
  return (
    <header className='flex z-50'>
      <nav className='fixed right-0 top-0 h-screen xl:w-[260px] w-[88px] md:flex hidden items-start justify-start flex-col py-2 px-4 border-l-[1px] bg-white'>
        <Link to='/sma/' className='flex items-center xl:justify-start justify-center w-full text-2xl font-bold pb-3 pt-3 xl:pr-3 text-blue-600'>
          SMA
        </Link>
        <ul className='flex w-full flex-col xl:gap-0 gap-2 '>
          {mainHeaderLinks.map((link) => {
            return (
              <li className='group w-full xl:py-1'>
                <Link to={link.path} className='flex items-center xl:justify-start justify-center w-full'>
                  <div className='group flex items-center w-fit xl:py-3 xl:pr-3 xl:pl-6 pr-3 pl-3 py-3 rounded-full gap-3 group-hover:bg-bg-hover'>
                    <span className='text-3xl'>{link.icon}</span>
                    <span className='xl:flex hidden font-bold'>{link.name}</span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
        {ui.token ? <div className='fixed bottom-0 right-0'>
          <AcountInfo />
        </div>
         :  <Link to='/sma/login' className='fixed bottom-1 right-0 flex xl:justify-start justify-center items-center xl:w-[260px] w-[88px] px-6 xl:text-[1rem] text-[.9rem] text-blue-700 gap-2'>
          <i className='text-4xl'><HiOutlineLogin /></i>
          <span className='xl:flex hidden'>ورود/تبت نام</span>
         </Link>}
      </nav>

      <nav className='fixed bottom-0 md:hidden flex items-center justify-center flex-col w-full h-[60px] border-t-[1px] bg-white z-50'>
        <ul className='flex items-center w-full'>
            {ui.token ? <div className='flex justify-center items-center w-full'>
              <AcountInfo />
            </div>
            :  <Link to='/sma/login'>
              <i className='text-4xl'><HiOutlineLogin /></i>
            </Link>}
          {bottomHeaderLinks.map((link) => {
            return (
              <li className='flex items-center w-full'>
                <Link to={link.path} className='flex items-center justify-center w-full'>
                  <div className='flex items-center'>
                    <span className='md:text-3xl text-2xl'>{link.icon}</span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header