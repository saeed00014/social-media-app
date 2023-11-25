import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SectionWraper from '../../components/hoc'
import { clearall } from '../../../../store/dataSlice'
import SuggestCard from './suggestions'
import ProductCard from './product'
import { productInfo } from '../../data/data'

import deleteAll from '../../services/deleteAll'
import Loading from '../../components/loading'

const CardPage = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)
  const loading = useSelector((state) => state.loading)

  const handleDeleteAll = () => {
    deleteAll()
    dispatch(clearall())
  }

  return (
    <section className='flex items-center justify-center w-screen'>
      <div className='flex md:flex-row flex-col justify-center gap-4 w-full max-w-[1450px]'>
        <div className='flex flex-col w-full'>
          <div className='flex justify-start w-full bg-g_Text_White border-b-[1px] border-g_Border_Shaded_Shop text-2xl p-4'>
            سبد خرید
          </div>
          <div>
            {data.cards && 
            data.cards.map((product, e) => {
              return (
                <ProductCard product={product}/>
              )
            })}
            {loading.cardLoading && <div className='flex items-center justify-center w-full h-10'>
              <Loading />
            </div>}
          </div>
          <div className='flex w-full justify-start'>
            {data.cards.length > 0 && <button onClick={() => handleDeleteAll()} className='flex items-center justify-center bg-gray-400 text-g_Text_White py-2 px-12 w-fit mt-4 rounded-[2rem]'>
              حذف همه
            </button>}
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col items-center justify-center md:w-[250px] h-[125px] p-2 bg-g_Text_White gap-4'>
            <div className='flex gap-1'>
              <span className='flex flex-row'>
                <p>هزینه کل</p>  
                &#40;
                {data.totalitems}
                <p>مورد</p>
                &#41;:
                {data.totalprice}
                <p className='text-[.6rem]'>تومان</p>  
              </span>
            </div>
            <button className='w-full pt-1 pb-2 rounded-full bg-red-400 text-g_Text_White font-[500]'>
              پرداخت صورت حساب
            </button>
          </div>
          <div className='flex md:flex-col flex-wrap items-center justify-around md:[&>*:nth-child(1)]:rounded-t-[1rem] gap-y-2'>
            {productInfo.map((product, e) => {
              return (
                <SuggestCard product={product}/>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionWraper(CardPage, 'card')