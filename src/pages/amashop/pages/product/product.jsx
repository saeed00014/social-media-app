import axios from 'axios'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SectionWraper from '../../components/hoc'
import RateHandler from '../../components/rateHandler'
import { addcard } from '../../../../store/dataSlice'

import { productInfo } from '../../data/data'

const Product = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)
  
  const url = window.location.href
  const id = url.slice(url.length - 1, url.length)  
  const product = productInfo.find((product) => product.id == id) 

  const handlePost = async (product) => {
    const founded = data.cards.find((card) => card.id == product.id)
    dispatch(addcard(product))
    await axios.post('https://saeed-main-portfolio-api.cyclic.cloud/products', {
      "id": product.id,
      "img": product.img,
      "title": product.title,
      "isAvailable": product.isAvailable,
      "remaining": product.remaining,
      "rate": product.rate,
      "price": product.price,
      "discountPrecent": product.discountPrecent,
      "quantity": 
      product.isAvailable 
      ? founded 
        ? founded.quantity < 9 
          ? founded.quantity + 1 
          : founded.quantity 
        : 1
      : 0          
    })
  }

  return (
    <section className='flex flex-col items-center justify-start w-screen min-h-screen '>
      <div className='flex flex-col gap-6 w-full max-w-[1450px]'>
        <div className='flex justify-between gap-4 w-full'>
          <div className='flex justify-between h-full gap-4'>
            <div className='min-w-max'>
              <img src={product.img} alt="" className='h-[250px]' />
            </div>
            <div className='flex flex-col gap-3 w-full'>
              <h1 className='text-[24px]'>
                {product.title}
              </h1>
              <span style={{direction: 'initial'}} className='relative flex items-center justify-end pr-[85px] h-5 text-black gap-1'>
                <RateHandler product={product}/>
                <small>
                  ({product.rateCount})
                </small>
                <span>
                  {product.rate}
                </span>
              </span>
              <span className='w-full'>
                قیمت: {product.price} تومان
              </span>
              {product.isAvailable 
                ? <span className='flex items-center w-full font-[500] text-green-600'>
                  موجود
                </span> 
                : <span className='flex items-center w-full font-[500] text-red-600'>
                  نا موجود
                </span>}
            </div>
          </div>
          <div className='min-w-max'>
            <div className='flex items-center justify-center w-[250px] h-[160px] border-[1px] border-black rounded-[.5rem]'>
              <button onClick={() => handlePost(product)} className='px-6 py-2 rounded-[1.5rem] bg-red-400 text-g_Text_White'>افزودن به سبد خرید</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionWraper(Product, 'product')