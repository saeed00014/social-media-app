import React, { useRef, useState } from 'react'

import { BsEmojiSmile } from 'react-icons/bs'
import { BiSend } from 'react-icons/bi'
import { GrGallery } from 'react-icons/gr'
import { BsMic } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { setSelfComment } from '../../../store/UiSlice'
import { createComment } from '../../../services/comment'

const SendBar = ({post}) => {
  const ref = useRef()
  const [state, setState] = useState('')

  const dispatch = useDispatch()
  const ui = useSelector((state) => state.ui)
  const loginUser = ui.loginUser
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setState('')
    const text = ref.current.text.value
    const url = 'http://127.0.0.1:8000/api/comments'
    async function setNewComment() {
      const result = await createComment(url, text, post.id, loginUser[0].id)
      if(result) {
        dispatch(setSelfComment(result))
      }
    }
    setNewComment()
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