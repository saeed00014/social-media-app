import React from 'react'
import Suggestion from './Suggestion'
import { useSelector } from 'react-redux'

const Scroller = () => {
  const ui = useSelector((state) => state.ui)
  const allLoginUsers = ui.allLoginUsers
  const loginUser = ui.loginUser
  const allLoginUsersMinosMy = allLoginUsers && allLoginUsers.filter((user) => user.id !== loginUser[0].id )

  return (
    <div className='overflow-y-scroll'>
      {allLoginUsersMinosMy.map((user) => {
        return (
          <Suggestion user={user} />
        )
      })}
    </div>
  )
}

export default Scroller