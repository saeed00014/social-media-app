import React from 'react'

import { styles } from '../styles'

const SectionWraper = (Component, idName) => 
function HOC() {
  return (
    <section className={`${styles.paddingX} flex items-center justify-center w-full md:mt-[127px] mt-[71px] ${idName == 'product' ? '!bg-g_Text_White' : '' }`}>
      <Component />
    </section>
  )
}

export default SectionWraper