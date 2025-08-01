import React from 'react'
import Header from '../../components/Header/Header'
import Navigation from '../../components/Header/Navigation/Navigation'
import TopHeader from '../../components/Header/TopHeader/TopHeader'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <div>
      <TopHeader />
    <Header />
    <Navigation />
    <div className='w-[95%] mx-auto'>
      <Outlet />
    </div>
    </div>
  )
}

export default MainLayout
