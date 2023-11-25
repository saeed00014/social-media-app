import React from 'react'

import { AiTwotoneStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'

const RateHandler = ({product}) => {
  const style = {
    width: `${product.rate * 16}px`
  }

  return (
    <>
      {product.rate &&
        <div style={style} className={`absolute right-0 flex flex-row-reverse [&>*]:text-orange-400 overflow-hidden`}>
          <div className='flex min-w-max'>
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />       
          </div>
        </div>
      }
        <div className='absolute right-0 flex max-w-max [&>*]:text-orange-400'>
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
    </>
  )
}

export default RateHandler