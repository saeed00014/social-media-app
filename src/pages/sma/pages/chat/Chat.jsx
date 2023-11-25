import React, { useEffect, useState } from 'react'
import HocWraper from '../../components/Hoc'
import Current from './current/Current'
import Suggested from './suggested/Suggested'
import { getOneMessage } from '../../services/message'
import { getTargetUser } from '../../services/user'
import { useDispatch, useSelector } from 'react-redux'
import { setAllMessage, setTargetUser } from '../../store/UiSlice'

const ChatPage = () => {  
  const dispatch = useDispatch()
  const [targetUserSt, setTargetUserst] = useState()
  const ui = useSelector((state) => state.ui)
  const loginUser = ui.loginUser
  const url = window.location.href
  const split = url.split('/')
  const id = split[split.length - 1]

  useEffect(() => {
    async function targetUserfetch() {
      const url = `http://127.0.0.1:8000/api/users/${id}`
      const targetUser = await getTargetUser(url)
      if(targetUser) {
        setTargetUserst(targetUser)
        dispatch(setTargetUser(targetUser[0]))
      }
    }
    targetUserfetch()
  }, [id])
  
  useEffect(() => {
    async function getAllMessagesFunc() {
      const allMessages = (targetUserSt[0] && loginUser[0]) && await getOneMessage(`http://127.0.0.1:8000/api/messages/${loginUser[0].id}=${targetUserSt[0].id}`)
      if(allMessages) {
          dispatch(setAllMessage(allMessages))
        }
      }
    getAllMessagesFunc()
  }, [targetUserSt])

  return (
    <section className='flex w-full max-h-screen min-h-screen overflow-hidden'>
      <Suggested />
      <Current targetUser={targetUserSt} loginUser={loginUser}/>
    </section>
  )
}

export default HocWraper(ChatPage, 'chat')