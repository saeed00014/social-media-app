import { Link } from 'react-router-dom'

const CategoryCard = ({category}) => {
  return (
    <Link className='flex flex-col items-center justify-start w-full lg:h-[420px] sm:h-[300px] h-[150px] min-w-[100px] md:p-4 p-2 border-[1px] bg-g_Text_White sm:gap-4 gap-2 overflow-hidden'>
      <h1 className='w-full text-right font-[500] sm:text-[1rem] text-[.8rem]'>    
        {category.title}
      </h1>
      <img src={category.img} alt="" className='border-[1px] border-gray-300 h-full w-full object-cover' />
    </Link>
  )
}

export default CategoryCard