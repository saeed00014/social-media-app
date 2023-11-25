import React, { useState } from 'react'

import { PiMagnifyingGlassBold } from 'react-icons/pi'
import SearchContainer from './searchContainer'

const SearchBar = () => {
  const [select, setSelect] = useState(false)
  const [sValue, setSValue] = useState('')

  const handleChange = (e) => {
    setSValue(e.target.value)
  }
  return (
    <div className='flex flex-col items-center justify-center gap-5 z-50'>
      <div className='relative flex flex-col items-center justify-center '>
        <input onSelect={() => setSelect(true)}  onChange={(e) => handleChange(e)} id='input' type="text" placeholder='جستجو' className='flex items-center md:w-[257px] w-full h-[42px] pr-12 pb-1 rounded-full bg-bg-theme-darker z-50'/>
        <label htmlFor='input' className='absolute right-4 z-50'>
          <PiMagnifyingGlassBold />
        </label>
      </div>
      {select && sValue &&
        <SearchContainer sValue={sValue} />
      }
    </div>
  )
}

export default SearchBar