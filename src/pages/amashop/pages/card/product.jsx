import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { deletecard, selectquantitycard } from "../../../../store/dataSlice"

import deleteOne from "../../services/deleteOne"
import patchCard from "../../services/patchCard"

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)
  const founded = data.cards.find((card) => product.id == card.id)

  const [quantity, setQuantity] = useState(founded.quantity)
  
  useEffect(() => {
    setQuantity(founded.quantity)
  }, [founded])

  const handleDelete = (product) => {
    deleteOne(product)
    dispatch(deletecard(product))
  }

  const handleSelect = (e) => {
    const value = e.target.value
    dispatch(selectquantitycard({...product, quantity: Number(value)}))
    setQuantity(value)
    patchCard(product)
  }

  return (
    <div className='flex flex-col bg-g_Text_White w-full h-fit'>
      <div className='flex sm:flex-row flex-col'>
        <div className='flex items-center justify-center sm:w-[12rem] w-full'>
          <img src={product.img} alt="" className='object-contain sm:w-[12rem] w-[8rem] h-full' />
        </div>
        <div className='flex flex-col justify-between text-right p-4'>
          <div className='flex flex-col items-start gap-1'>
            <p>{product.title}</p>
            <div className='flex gap-4'>
              <span className='flex flex-row gap-1'>
                قیمت:
                {product.price}
                <small>تومان</small>  
              </span>
              {product.discountPrecent !== 0 && <span className='flex py-[1px] px-[5px] text-[.9rem] bg-red-600 rounded-full text-white'>
                {product.discountPrecent}%
              </span>}
            </div>
            <div className='flex flex-col text-[.8rem]'>
            <div className='flex gap-2 justify-start'>
              <input id={`gift${product.id}`} type="checkbox" />
              <label htmlFor={`gift${product.id}`} className='pb-1'>این یک هدیه است</label>
            </div>
              <div className='flex flex-row gap-1'>
                {product.isAvailable ? <span className='flex w-fit text-[.7rem] text-green-600'>
                  موجود
                </span> : <span className='flex w-fit font-[500] text-red-600'>
                  نا موجود
                </span>}
                {product.remaining ? <div className='flex gap-1 pt-[.1rem] text-red-600 -mt-[.2rem]'>
                  {product.remaining}_ 
                  عدد در انبار باقی مانده  
                </div> : '' }
              </div>
              <span>رنگ</span>
              <span>حالت</span>
              <span>نوع</span>
            </div>
          </div>
          <div className='flex flex-row flex-wrap items-center pt-2'>
            <div className='relative flex items-center justify-center '>
              <select style={{direction: 'initial'}} id={product.id} name='تعداد' value={quantity} onChange={(e) => handleSelect(e)} className='flex w-[73px] h-[30px] px-1 pb-1 rounded-[15px] bg-transparent shadow-3xl z-10'>
                {product.isAvailable 
                ?<>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                </>                     
                : <option value='0'>0</option>}

              </select>
              <label style={{direction: 'initial'}} onClick={() => document.getElementById(product.id).click()} htmlFor={product.id} className='absolute left-0 top-0 flex items-center justify-center font-[500] text-[.8rem] w-[73px] h-[30px] px-1 pb-1 rounded-[15px] bg-g_Background_White_Shop shadow-3xl'>: تعداد</label> 
            </div>
            <button onClick={() => handleDelete(product)} className='border-l-[1px] px-4 h-6 min-w-max font-[400] text-[.8rem]'>
              حذف
            </button>
            <button className='border-l-[1px] px-4 h-6 min-w-max font-[400] text-[.8rem]'>
              ذخیره برای بعد
            </button>
            <button className='border-l-[1px] px-4 h-6 min-w-max font-[400] text-[.8rem]'>
              مقایسه با محصولات مشابه
            </button>
            <button className='border-l-[1px] px-4 h-6 min-w-max font-[400] text-[.8rem]'>
              به اشتراک گذاشتن
            </button>
          </div>
      </div>
      </div>
      {product.isAvailable ? <div className='flex justify-start w-full pb-4 pt-1 pr-4 border-t-2'>
        هزینه کل : {(product.price - product.price * product.discountPrecent / 100) * product.quantity} تومان
        </div>
        : <div className='flex justify-start w-full pb-4 pt-1 pr-4 border-t-2'>موجود شد اطلاع بده</div> }  
    </div>
  )
}

export default ProductCard