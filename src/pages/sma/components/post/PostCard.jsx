import React, { useEffect, useState } from 'react'

import defaultAvatar from '../../assets/images/testImg.png'

import { BsThreeDots } from 'react-icons/bs'
import { AiFillLike } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import { deletePost } from '../../services/post'
import { DeletePost } from '../../store/UiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { createLike, deleteLike, getAllLike } from '../../services/like'
import Comment from './comment/Comment'
import SharePost from './SharePost'
import { getAllComment } from '../../services/comment'
import NotIntrest from './NotIntrest'

const PostCard = ({post, edition, handleSetCommentCall, targetUser}) => {
  const [image, setImage] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [notIntrest, setNotIntrest] = useState(false)
  const [sharePost, setSharePost] = useState(false)
  const [comment, setComment] = useState(false)
  const [commentQ, setCommentQ] = useState('')
  const [likes, setLikes] = useState(null)
  const [isMylike, setIsMyLike] = useState(null)
  const dispatch = useDispatch()
  const ui = useSelector((state) => state.ui)
  const loginUser = ui.loginUser
  
  useEffect(() => {
    function getImgUrl(){
      const resAvatar = new URL(`../../assets/avatar/${targetUser && targetUser.avatar}`, import.meta.url).href
      const avatarUrlLength = resAvatar.split('/').length
      const Avatarurl = resAvatar.split('/')[avatarUrlLength - 1]
      if(Avatarurl !== 'undefined') {
        setAvatar(resAvatar)
      }
      if(Avatarurl == 'undefined') {
        setAvatar(null)
      }
      const resImage = new URL(`../../assets/avatar/${post && post.media}`, import.meta.url).href
      const imageUrlLength = resImage.split('/').length
      const imageUrl = resImage.split('/')[imageUrlLength - 1]
      if(imageUrl !== 'undefined') {
        setImage(resImage)
      }
      if(imageUrl == 'undefined') {
        setImage(null)
      }
    }
    getImgUrl()
  }, [targetUser, post])

  useEffect(() => {
    async function getAllPostLikes() {
      const url2 = `http://127.0.0.1:8000/api/likes/${loginUser[0] && loginUser[0].id}=${post.id}`
      const allLike = loginUser[0] && await getAllLike(url2)
      if(allLike) {
        setIsMyLike(allLike.isMyLike)
        setLikes(allLike.quantity)
      }
    }
    getAllPostLikes()
  }, [loginUser[0]])

  useEffect(() => {
    async function getAllPostCommentsFunc() {
      const url2 = `http://127.0.0.1:8000/api/comments/q/${post.id}`
      const allCommnetQ = await getAllComment(url2)
      if(allCommnetQ) {
        setCommentQ(allCommnetQ)
      }
      if(allCommnetQ == 0) {
        setCommentQ(0)
      }
    }
    getAllPostCommentsFunc()
  }, [post])

  const handleDelete = () => { 
    async function handledeleteDataUi() {
      const result = await deletePost(`http://127.0.0.1:8000/api/posts/${post.id}`)
      if(result) {
        dispatch(DeletePost(post))
      }
    }
    ((targetUser && loginUser[0]) && (targetUser.id == loginUser[0].id)) ? handledeleteDataUi() : setNotIntrest(!notIntrest)
  }
  
  const handleLike = () => {
    const url = `http://127.0.0.1:8000/api/likes`
    const url2 = `http://127.0.0.1:8000/api/likes/${loginUser[0].id}=${post.id}`
    async function createGetLike() {
      const result = await createLike(url, post.id, loginUser[0].id)
      if(result) {
        const allLike = await getAllLike(url2)
        setIsMyLike(allLike.isMyLike)
        setLikes(allLike.quantity)
      }
    }
    createGetLike()
  }
  
  const handleDisLike = () => {
    const deleteUrl = `http://127.0.0.1:8000/api/likes/${loginUser[0].id}=${post.id}`
    const url = `http://127.0.0.1:8000/api/likes/${loginUser[0].id}=${post.id}`
    async function deleteGetLike() {
      const result = await deleteLike(deleteUrl)
      if(result) {
        const allLike = await getAllLike(url)
        setIsMyLike(allLike.isMyLike)
        setLikes(allLike.quantity)
      }
    }
    deleteGetLike()
  }

  const handleComment = () => {
    setComment(true)
  }
  
  const handleSetComment = () => {
    setComment(false)
  }

  const handleNotIntrest = () => {
    setNotIntrest(false)
  }

  return (
    <div className='relative flex justify-center w-full'>
      <div className={`flex flex-col  w-full ${edition ? '' : 'md:rounded-[.6rem] rounded-[.3rem] shadow-3xl' } max-w-[800px] bg-white`}>
        {edition !== 'comment' && 
          <header className='flex justify-between md:pt-3 pt-2 md:px-4 px-2 h-[48px] md:mb-3 mb-1 gap-3'>
            <a href={`/sma/profile/${targetUser && targetUser.id}`} className='flex w-full md:gap-3 gap-2 cursor-pointer'>
              <div className='w-10 h-10 min-w-[40px]'>
                <img src={avatar ? avatar : defaultAvatar} alt="profile picture" className='object-cover h-full w-full rounded-full' />
              </div>
              <div className='relative h-9 w-full md:mt-0 mt-1 md:text-[1rem] text-[.9rem]'>
                <span className='absolute flex h-4 -top-1'>{targetUser && (targetUser.firstName + ' ' + targetUser.lastName)}</span>
                <div className='absolute flex h-4 top-5 gap-1'>
                  <small>@{targetUser && targetUser.username}</small>
                </div>
              </div>
            </a>
            <div className='flex'>
              <button className='flex items-center justify-center md:text-2xl text-[1.7rem] min-w-[40px] min-h-[40px] rounded-full hover:bg-bg-hover'>
                <BsThreeDots />
              </button>
              <button onClick={handleDelete} className='relative flex items-center justify-center font-normal min-w-[40px] min-h-[40px] rounded-full hover:bg-bg-hover'>
                <i className='absolute w-[.1rem] md:h-5 h-5 rotate-45 bg-black'></i>  
                <i className='absolute md:w-5 w-5 h-[.1rem] rotate-45 bg-black'></i>  
              </button>
            </div>
          </header>
        }

        <div className='flex flex-col gap-3 max-h-min'>
          <div className='md:px-4 px-2 md:text-[1rem] text-[.9rem]'>
            <p>{post.text}</p>
          </div>
          <div className='flex justify-center w-full'>
            <img src={image} alt="" />
          </div>
        </div>
        <footer className='flex flex-col md:px-4 px-2'>
          <div className='flex items-center justify-between w-full py-2 border-b-[2px]'>
            <div className='flex gap-1 md:mt-0 mt-1 md:text-[1rem] text-[.9rem]'>
              <span>نظرات</span>
              <span>{commentQ && commentQ}</span>
            </div>
            <button onClick={isMylike && isMylike == 1 ? handleDisLike : handleLike} className='relative flex'>
              <span className='md:pl-12 pl-11'>{likes && likes}</span>
              <i className={`absolute left-5 md:top-0 top-[.1rem] flex items-center justify-center md:text-[.8rem] text-[.7rem] bg-red-400 [&>*]:text-white p-1 rounded-full border-2 border-white`}><AiFillHeart /></i>
              <i className={`absolute left-0 md:top-0 top-[.1rem] flex items-center justify-center md:text-[.8rem] text-[.7rem] bg-blue-400 text-white p-1 rounded-full border-2 border-white`}><AiFillLike /></i>
            </button>
          </div>
          <div className='flex items-center justify-between w-full md:min-h-[44px] min-h-[34px] py-[.25rem]'>
            <button className='flex items-center justify-center w-full h-full md:gap-2 gap-1 hover:bg-bg-hover rounded-[.3rem]'>
              <i className='md:text-2xl'><BiLike /></i>
              <span className='md:text-[1rem] text-[.8rem]'>دوست داشتن</span>
            </button>
            <button onClick={edition !== 'comment' ? handleComment : handleSetCommentCall} className='flex items-center justify-center w-full h-full md:gap-2 gap-1 hover:bg-bg-hover rounded-[.3rem]'>
              <i className='md:text-2xl'><FaRegComment /></i>
              <span className='md:text-[1rem] text-[.8rem]'>نظرات</span>
            </button>
            <button onClick={() => setSharePost(!sharePost)} className='relative flex items-center justify-center w-full h-full md:gap-2 gap-1 hover:bg-bg-hover rounded-[.3rem]'>
              <i className='md:text-2xl'><RiSendPlaneLine /></i>
              <span className='md:text-[1rem] text-[.8rem]'>ارسال</span>
              {sharePost && 
                <SharePost />
              }
            </button>
          </div>
        </footer>
      </div>
      {notIntrest && 
        <NotIntrest handleNotIntrest={handleNotIntrest} />
      }
      {comment && edition !== 'comment' && 
        <Comment post={post} handleSetComment={handleSetComment} targetUser={targetUser}/>
      }
    </div>
  )
}

export default PostCard