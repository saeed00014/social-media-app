import { useDispatch, useSelector } from "react-redux"
import { useTextWidth } from "@tag0/use-text-width"

import RateHandler from "../../components/rateHandler"
import { addcard } from "../../../../store/dataSlice"

import PostOneCard from "../../services/postOneCard"

const SuggestCard = ({product}) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  const width = useTextWidth({ text: product.title})

  const handlePost = (product) => {
    const founded = data.cards.find((card) => card.id == product.id) 
    dispatch(addcard(product))
    PostOneCard(founded, product)
  }

  return (
    <div className='flex bg-g_Text_White h-[130px] w-[250px] py-1 overflow-hidden'>
      <div className='flex w-[7rem]'>
        <img src={product.img} alt="" className='w-full h-full'/>
      </div>
      <div className='flex flex-col justify-center items-start w-[133px]'>
        <div style={{width: `${width}px`}} className='flex justify-start overflow-hidden'>
          <div className='flex justify-start w-[111px] text-right overflow-hidden'>   
            <p className='flex min-w-max text-right overflow-hidden'>
              {product.title}
            </p>
          </div>
          <p>...</p>
        </div>
        <span className='flex w-full justify-start'>
          {product.price - product.price * product.discountPrecent / 100}
          <small>تومان</small> 
        </span>
        <div style={{direction: 'initial'}} className='flex items-center relative w-full h-[16px] '>
          <RateHandler product={product}/>
          <small>
            ({product.rateCount})
          </small>
          <small>
            {product.rate}
          </small>
        </div>
        <button onClick={() => handlePost(product)} className='bg-red-400 py-1 px-3 text-[.7rem] mt-2 rounded-[10px] text-g_Text_White'>
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  )
}

export default SuggestCard