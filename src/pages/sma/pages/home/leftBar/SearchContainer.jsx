import React, { useEffect, useState } from 'react'
import { getFillterUser } from '../../../services/user'

import SearchedUser from './SearchedUser'

const SearchContainer = ({sValue}) => {
  const [result, setResult] = useState('')
  const [avatar, setAvatar] = useState(null)
  useEffect(() => {
    const url =  `http://127.0.0.1:8000/api/users/s/${sValue}`
    async function getFillterUserFunc() {
      const fillterUsers = sValue && await getFillterUser(url)
      if(fillterUsers) {
        setResult(fillterUsers)
      }
    }
    getFillterUserFunc()
  }, [sValue])

  return (
    <div className='w-[289px] h-screen bg-white px-4'>
      {result && result.map((result) => {
        return (
          <SearchedUser result={result}/>
        )
      })}
    </div>
  )
}

export default SearchContainer