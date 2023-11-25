import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import defaultAvatar from '../../../assets/images/testImg.png'

import { BiSolidEdit } from 'react-icons/bi'
import FollowBottun from '../../../components/FollowBottun'
import { getAllUserFollow } from '../../../services/friend'
import { avatarUser, logout } from '../../../services/user'
import { createPostMedia } from '../../../services/post'

const Header = () => {
  const [imageAddress, setImageAddress] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [followers, setFollowers] = useState('')
  const [followings, setFollowings] = useState('')
  const ui = useSelector((state) => state.ui)
  const isMyProfile = ui.isMyProfile
  const targetUser = ui.targetUser

  useEffect(() => {
    const url = `http://127.0.0.1:8000/api/friends/q/${targetUser[0] && targetUser[0].id}`
    async function getAllUserFollowFunc() {
      const result = targetUser[0] && await getAllUserFollow(url)
      if(result) {
        setFollowers(result.followers)
        setFollowings(result.followings)
      }
    } 
    getAllUserFollowFunc()
  }, [targetUser[0]])

  const handleLogout = () => {
    const email = targetUser[0] && targetUser[0].email
    const url = `http://127.0.0.1:8000/api/auth/logout/${email}`
    async function handleLogoutFunc() {
      const result = await logout(url)
      if(result) {
        location.reload('/')
      }
    }
    handleLogoutFunc()
  }

  const handleSetAvatar = (e) => {
    const media = e.target.files[0]
    const url = 'http://127.0.0.1:8000/i'
    const url2 = `http://127.0.0.1:8000/api/users/${targetUser[0].id}`
    const fd = new FormData()
    fd.append('image', media)
    async function setAvatarFunc() {
      const result = await createPostMedia(url, fd)
      if(result) {
        const result2 = await avatarUser(url2, result)
        if(result2 == 'avatar added') {
          setImageAddress(result)
          location.reload()
        }
      }
    }
    setAvatarFunc()
  }

  useEffect(() => {
    function getImgUrl(){
      const res = new URL(`../../../assets/avatar/${targetUser && targetUser[0].avatar}`, import.meta.url).href
      const urlLength = res.split('/').length
      const url = res.split('/')[urlLength - 1]
      if(url !== 'undefined') {
        setAvatar(res)
      }
      if(url == 'undefined') {
        setAvatar(null)
      }
    }
    getImgUrl()
  }, [targetUser])

  return (
    <header className='relative flex flex-col w-full'>
      <div className='flex w-full max-w-none h-72'>
        <img src={defaultAvatar} alt="" className='object-cover h-full w-full'/>
      </div>
      <div className='flex items-center justify-end w-full lg:gap-5 gap-2 py-5 lg:px-8 md:px-4 px-2'>
        {isMyProfile ? 
        <>
          <button className='flex md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500 gap-2'>
            <i className='text-[1.2rem] pt-1'><BiSolidEdit /></i>
            <span className='md:flex hidden'>تغییر اطلاعات </span>
          </button>
          <button onClick={handleLogout} className='flex md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500'>
            <span>خروج از حساب </span>
          </button>
        </>
        : <>
        {targetUser && 
          <FollowBottun targetUser={targetUser}/>
        }
          <button className='md:flex hidden md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500'>شبکهای اجتماعی</button>
          <a href={`/sma/chat/${targetUser[0] && targetUser[0].id}`} className='md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500'>ارسال پیام</a>
        </>
        }
      </div>
      <div className='flex flex-col'>
        {isMyProfile &&
        <>
          <label htmlFor='image' className='absolute xl:right-20 lg:right-8 md:right-4 right-2 md:bottom-10 bottom-14 w-32 h-32 border-4 border-white rounded-full cursor-pointer z-40'>
            <img src={avatar ? avatar : defaultAvatar} alt="" className='object-cover bg-white  h-full w-full rounded-full'/>
            <span className='absolute right-0 bottom-0 text-2xl'><BiSolidEdit /></span>
          </label>
          <input onChange={(e) => handleSetAvatar(e)} className='hidden' type="file" name='image' id='image' accept=".jpg, .jpeg, .png"  />
        </>
        }
        {!isMyProfile &&
        <div className='absolute xl:right-20 lg:right-8 md:right-4 right-2 md:bottom-10 bottom-14 w-32 h-32 border-4 border-white bg-white rounded-full z-50'>
          <img src={avatar ? avatar : defaultAvatar} alt="" className='object-cover h-full w-full rounded-full'/>
        </div>
        }
        <div className='relative flex flex-col w-full min-w-max px-3'>
          <div className='flex items-center md:justify-center justify-between h-full md:gap-8 gap-6 lg:px-6'>
            <div className='flex justify-center  min-w-max '>
              <span className='flex items-center'>{targetUser[0] && (targetUser[0].firstName + ' ' + targetUser[0].lastName)}</span>
              <span>{targetUser[0] && targetUser[0].dis}</span>
            </div>
            <div className='flex md:gap-4 gap-2 w-full'>
              <a href="" className='flex md:flex-row flex-col items-center min-w-max md:gap-1'>
                <span>{followings && followings}</span>
                <span>دنبال کننده</span>
              </a>
              <a href="" className='flex md:flex-row flex-col items-center min-w-max md:gap-1'>
                <span>{followers && followers}</span>
                <span>دنبال شده</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header