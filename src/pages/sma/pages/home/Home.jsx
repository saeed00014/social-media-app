import React from 'react'
import HocWraper from '../../components/Hoc'
import Body from './Body'
import LeftBar from './leftBar/LeftBar'
import Header from './Header'
import GuestLeftBar from './leftBar/GuestLeftBar'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const ui = useSelector((state) => state.ui)
  const accessToken = ui.token

  return (
    <section className={`flex h-full w-full min-h-screen lg:pl-[290px]`}>
      <div className='flex flex-col w-full'>
        <Header />
        <Body />
      </div>
      {accessToken ?
       <LeftBar /> :
        <GuestLeftBar />
      }
    </section>
  )
}

export default HocWraper(HomePage, 'home')