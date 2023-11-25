import React, { useRef, useState } from 'react'

import { BsEmojiSmile } from 'react-icons/bs'
import { BiSend } from 'react-icons/bi'
import { GrGallery } from 'react-icons/gr'
import { BsMic } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { createMessage } from '../../../../services/message'
import { setSelfMessage } from '../../../../store/UiSlice'

const SendBar = ({targetUser}) => {
  const ref = useRef()
  const [state, setState] = useState('')

  const dispatch = useDispatch()
  const ui = useSelector((state) => state.ui)
  const loginUser = ui.loginUser
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setState('')
    const text = ref.current.text.value
    const url = 'http://127.0.0.1:8000/api/messages'
    async function setNewMessage() {
      const result = (targetUser[0] && loginUser[0]) &&  await createMessage(url, loginUser[0].id, targetUser[0].id, text)
      if(result) {
        dispatch(setSelfMessage(result))
      }
    }
    setNewMessage()
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} ref={ref} className='relative flex items-center justify-center border-[2px] w-full h-11 rounded-full'>
      <input onChange={(e) => setState(e.target.value)} value={state} type="text" name='text'  placeholder='پیام ...' className='h-full w-full rounded-full px-12' />
      {state ? <div className='absolute right-3 text-[1.5rem] text-blue-600'>
          <label htmlFor="submit"><BiSend /></label>
          <input type='submit' id='submit' className='hidden' />
        </div>
       : <i className='absolute right-3 text-[1.5rem]'><BsEmojiSmile /></i> }
      <div className='absolute left-6 flex text-[1.5rem] gap-4'>
        <i><BsMic /></i>
        <i><GrGallery /></i>
      </div>
    </form>
  )
}

export default SendBar