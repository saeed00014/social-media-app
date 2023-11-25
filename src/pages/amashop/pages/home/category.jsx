import CategoryCard from './categoryCard'

import { categoryCard } from '../../data/data'

const Category = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full pt-8'>
        <div className='flex items-center justify-center pb-4'>
          <h1 className='text-2xl font-[500]'>
             دسته‌بندی های آماشاپ
          </h1>
        </div>
      <div className='grid xl:grid-cols-4 grid-cols-3 items-center justify-center w-full max-w-[1450px] pt-4 md:gap-4 gap-2'>
        {categoryCard.map((category) => {
          return (
            <CategoryCard category={category}/>
          )
        })}
      </div>
    </section>
  )
}

export default Category