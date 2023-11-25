import React, { useState } from 'react'

import { useSelector } from 'react-redux'

const RecentPosts = () => {
  const [image, setImage] = useState(null)
  const ui = useSelector((state) => state.ui)
  const allTargetUserPosts = ui.alltargetUserPosts
  return (
    <div className='flex flex-col w-full max-w-[800px] h-fit bg-white'>
      <div className='flex flex-col gap-4 py-2 pb-4 px-3 shadow-3xl rounded-[.6rem]'>
      <span>داغ ترین اپلود ها</span>
      <div className='grid grid-cols-2 gap-2 rounded-[.4rem] overflow-hidden'>
        {allTargetUserPosts ? allTargetUserPosts.map((post) => {
          let image = ''
          function getImgUrl(){
            const res = new URL(`../../../../assets/avatar/${post && post.media}`, import.meta.url).href
            const urlLength = res.split('/').length
            const url = res.split('/')[urlLength - 1]
            if(url !== 'undefined') {
              image = res
            }
            if(url == 'undefined') {
              image = null
            }
          }
          getImgUrl()
          return (
            <img src={image} alt="" />
          )
        })
        : <div></div> 
      }
      </div>
      <button className='h-10 w-full bg-bg-hover rounded-[.4rem]'>
        مشاهده همه
      </button>
      </div>
    </div>
  )
}

export default RecentPosts