import React from 'react'
import { Outlet } from 'react-router-dom'
// import View from './View'

function Layout() {
  return (
    <>
      {/* <View /> */}
      <Outlet />
    </>
  )
}

export default Layout;