import React from 'react'
import { Link } from 'react-router-dom'
import {TbCalendarStats} from 'react-icons/tb'

import { styles } from '../../styles'

import ProductCard from '../../components/productCard'
import { productInfo } from '../../data/data'

const HomeDiscount = () => {
  const PrecentMaker = () => {
    return (
      <span className='md:text-4xl text-3xl  font-[500] text-white'>
        %
      </span>
    )
  }

  return (
    <section className='flex items-center justify-center w-screen overflow-x-scroll'>
      <div className='flex items-center justify-center flex-col md:pt-8 pt-4 md:gap-8 gap-4'>

        <div className={`${styles.paddingX} flex justify-between items-center w-screen md:h-20 h-16 bg-yellow-500`}>
          <PrecentMaker />
          <h1 className='md:text-3xl text-2xl font-[500] pb-1 text-white'>تخفیف های ویژه</h1>
          <PrecentMaker />
        </div>

        <div className='flex flex-row justify-end w-screen h-[16.5rem] bg-red-400 py-6 pl-2 max-w-[1450px] overflow-x-scroll'>

          <div className='relative flex flex-col items-center justify-center h-full min-w-max [&>*]:text-white'>

            <div className='absolute bottom-2'>
              <Link to='' className='flex text-[1.2rem] gap-1 cursor-pointer'>
                <p className='sm:text-[1rem] text-[.9rem]'>
                  مشاهده همه
                </p>
                <span className='sm:pt-[2px] -mt-1'>
                  &gt;
                </span>
              </Link>
            </div>

            <div className='flex flex-col sm:w-[10rem] w-[7rem] pb-6'>
              <h1 className='flex items-start justify-center w-full font-[500] sm:text-[1rem] text-[.8rem]'>
                تخفیف های امروز 
              </h1>
              <span className='relative flex items-start justify-center'>
                <TbCalendarStats className='sm:text-7xl text-6xl'/>
                <span className='absolute bottom-3 sm:left-16 font-[500]'>
                  24
                </span>
              </span>
            </div>

          </div>
          
          <div className='flex flex-row gap-1 h-full overflow-x-scroll'>
            {productInfo.map((product) => {
              return (
                <div>
                  <ProductCard product={product} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeDiscount