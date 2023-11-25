import styles from '../styles'

import React from 'react'

const HocWraper = (Component, idName) =>   
function HOC() {
  return (
    <section className={`${styles.paddingX} flex h-full w-full`}>
      <Component />
    </section>
  )
}

export default HocWraper