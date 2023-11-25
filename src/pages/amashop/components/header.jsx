import { styles } from '../styles'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search'
import LoginIcon from '@mui/icons-material/Login'
import {MdOutlineLocationOn} from 'react-icons/md'
import {RiShoppingCartLine} from 'react-icons/ri'

import { navLink, navLinkPhone } from '../data/data'

const Header = () => {
  const data = useSelector((state) => state.data)
  const [active, setActive] = useState(window.location.href)

  const ATagMaker = ({name, path, icon}) => {
    return (
      <Link onClick={() => setActive(path)} to={path} className='flex lg:px-4 px-2 font-bold min-w-max gap-1 text-[16px]'>
        <span>
          {icon}
        </span>
        {name}
      </Link>
    )
  }

  const LiMaker = ({ename, name, path, icon, activeIcon, i}) => {
    return (
      <li onClick={() => setActive(path)} className={`relative flex justify-center items-center ${i== '1' ? 'h-full' : 'h-8'}  xl:px-3 px-2`}>
        <Link to={path} className={`flex ${i == '1' ? 'flex-col gap-2' : 'gap-1 '} font-sans text-[14px] min-w-max`}> 
          <span className={`flex items-center justify-center pt-[3px] ${i == '1' ? 'scale-[1.7]' :'scale-125'} `}>
            {active.substring(active.length - 4) == 'shop' && ename == 'shop' ? activeIcon
            : active.includes(ename) && ename !== 'shop' ? activeIcon : icon}
          </span>
          {name}
        </Link>
        {ename == 'card' && <span className='absolute right-3 bottom-6 flex items-center justify-center w-2 h-2 p-[.7rem] rounded-full bg-red-500 text-g_Text_White'>
            {data.cards.length}
          </span>
        }
      </li>
    )
  }

  return (
    <header className={`fixed top-0 ${styles.paddingX} py-1 pb-0 flex flex-col justify-center items-center w-screen  border-b-[3px] !bg-g_Text_White z-50`}>
      <div className='flex flex-col w-full max-w-[1600px]'>
        <div className='flex justify-between h-16'>

          <div className='flex items-center justify-start sm:w-3/4 w-full lg:gap-8 gap-4'>
            <Link onClick={() => setActive('/shop')} to='/shop' className='sm:flex hidden font-primary text-2xl font-black text-red-500'>
              AMASHOP
            </Link>
            <div className='relative sm:flex hidden items-center justify-start w-full'>
              <input type="text" id='search' placeholder='جستجو' className='text-start md:w-5/6 w-full max-w-[600px] h-12 bg-g_Background_Shaded_Shop rounded-[10px] pr-12 text-[18px] cursor-pointer' />
              <label htmlFor='search' className='absolute right-0 pr-3 cursor-pointer'>
                <SearchIcon />
              </label>
            </div>


            <div className='sm:hidden flex items-center justify-start md:w-5/6 w-full max-w-[600px] h-12 pr-10 bg-g_Background_Shaded_Shop rounded-[10px] text-[18px] cursor-pointer'>
              <span className='absolute right-6 cursor-pointer'>
                <SearchIcon />
              </span>
              <p>
                جستجو در
              </p>
              <h1 to='/shop' className='absolute right-32 sm:hidden flex font-primary text-2xl font-[700]'>
                AMASHOP
              </h1>
            </div>

          </div>

          
          <div className='sm:flex hidden items-center justify-end w-1/4 gap-4'>
            <div className='flex border-[1px] rounded-[5px] py-2 [&>*:nth-child(2)]:border-r-[2px] [&>*:nth-child(2)]:border-r-g_Text_Black'>
              <ATagMaker name='ورود' path='/shop' icon={<LoginIcon />} />
              <ATagMaker name='تبت نام' path='/shop' />
            </div>
            <Link onClick={() => setActive('/shop/card')} to='/shop/card' className='relative md:flex hidden justify-center w-16 border-r-[1px] cursor-pointer'>
              <RiShoppingCartLine className='lg:text-3xl text-2xl'/>
              <span className='absolute right-1 -bottom-3 flex items-center justify-center w-3 h-3 p-[.8rem] rounded-full bg-red-500 text-g_Text_White'>
                {data.cards.length}
              </span>
            </Link>
            
          </div>

        </div>
        <nav className='md:flex hidden lg:justify-between justify-start items-center w-full h-full'>


          <ul className='flex flex-row justify-between items-center h-14 max-w-[1100px] [&>*:nth-child(1)]:pr-0'>
            
            <li className={`flex justify-center items-center gap-2 h-8 px-3`}>
              <Link onClick={() => setActive(navLink[0].path)} to={navLink[0].path} className='flex gap-2 font-[700] text-[18px]  min-w-max'> 
                <span className='flex items-center justify-center scale-125'>
                  {navLink[0].icon}
                </span>
                {navLink[0].name}
              </Link>
            </li>

            <div className='flex [&>*]:text-gray-600 flex-row 2xl:border-l-[1px] border-l-none border-r-[1px]'>
              {navLink.map((link) => {
                return (
                  <>
                    {link.name == 'دسته‌بندی کالاها' ? '' : <LiMaker name={link.name} icon={link.icon} path={link.path} />}
                  </>
                )
              })}
            </div>
            <div className='2xl:flex hidden'>
              <LiMaker name='فروش در آماشاپ'/>
            </div>
          </ul>

          <div className='lg:flex hidden items-center justify-center h-8 gap-2 cursor-pointer'>
            <p className='min-w-max font-[500] xl:text-[1rem] text-[0.8rem]'>
              لطفا شهر خود را انتخاب کنید   
            </p>
            <span>
              <MdOutlineLocationOn className='text-[20px]' />
            </span>
          </div>
        </nav>

        <nav className={`${styles.paddingX} text-gray-500 fixed bottom-0 left-0 md:hidden flex flex-row items-center w-screen h-16 justify-between border-t-[3px] bg-white z-50`}>
          {navLinkPhone.map((link) => {
            return (
              <LiMaker ename={link.ename} name={link.name} icon={link.icon} activeIcon={link.activeIcon} path={link.path} i='1' />
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header