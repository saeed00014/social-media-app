import React, { useState } from 'react'

const LoadingPage = () => {
  const [load, setLoad] = useState("200%")

  const styels = {
    marginRight: load  
  }

  setTimeout(() => {
    setLoad('0')
  }, 10)

  return (
    <section className='flex items-center justify-center w-screen h-screen z-50'>
      <div className='flex flex-col items-center justify-center w-[50%] gap-8 overflow-x-hidden max-w-[500px]'>
        <h1 className='font-primary text-5xl'>
          Saeed
        </h1>
        <span style={styels} className='flex w-full h-[.4rem] rounded-[1rem] bg-g_Text_White transition-all duration-[700ms]'></span>
      </div>
    </section>
  )
}

export default LoadingPage