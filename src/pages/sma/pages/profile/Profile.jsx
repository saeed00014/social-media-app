import React, { useEffect, useState } from 'react'
import HocWraper from '../../components/Hoc'
import Header from './header/Header'
import Body from './body/Body'
import { useDispatch } from 'react-redux'
import { getTargetUser } from '../../services/user'
import { setAllTargetUserPost, setTargetUser } from '../../store/UiSlice'
import { getAllTargetUserPost } from '../../services/post'

const ProfilePage = () => {
  const [targetUser, setTargetUserST] = useState('')
  const dispatch = useDispatch()
  const url = window.location.href
  const split = url.split('/')
  const id = split[split.length - 1]
  
  useEffect(() => {
    async function targetUserfetch() {
      const targetUser = await getTargetUser(`http://127.0.0.1:8000/api/users/${id}`)
      if(targetUser) {
        setTargetUserST(targetUser)
        dispatch(setTargetUser(targetUser))
      }
    }
    targetUserfetch()
  }, [id])
  
  useEffect(() => {
    async function getAllTargetUserPostFunc() {
      if(targetUser[0]) {
        const allTargetUserPosts = await getAllTargetUserPost(`http://127.0.0.1:8000/api/posts/${targetUser[0].id}`)
        if(allTargetUserPosts) {
          dispatch(setAllTargetUserPost(allTargetUserPosts))
        }
      }
    }
    getAllTargetUserPostFunc()
  }, [targetUser])

  return (
    <section className='flex flex-col justify-start items-center w-full overflow-y-scroll md:pb-4 pb-16 max-h-screen h-full'>
      <Header targetUser={targetUser} />
      <Body targetUser={targetUser} />
    </section>
  )
}

export default HocWraper(ProfilePage, 'profile')