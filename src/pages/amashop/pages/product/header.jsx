import React from 'react'

import { productInfo } from '../../data/data'

const Header = ({product}) => {
  return (
    <header className='flex items-center justify-center p-4 w-full bg-g_Background_White_Shop'>
    <div className='flex items-center justify-start w-full'>
      <h1 className='text-2xl pl-[5%]'>
        {product.category}
      </h1>
      <div className='flex justify-between w-full gap-4'>
        {productInfo.map((productCard, e) => {
          return (
            e < 6 && productCard.category == product.category
              ? <div className='flex flex-col items-center justify-center w-full'>
                  <a href={`/shop/product/${productCard.id}`} target='_blank' className='flex flex-col items-center gap-2 text-[.8rem]'>
                    <img src={productCard.img} alt="" className='h-[80px] object-contain' />
                    <span>
                      {productCard.model}
                    </span>
                  </a>
                </div>
              : ''
          )
        })}
      </div>
    </div>
    </header>
  )
}

export default Header