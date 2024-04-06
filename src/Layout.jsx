import React from 'react'
import Header from './Components/Header/Header'
import Frist_bar from './Components/First_bar/Frist_bar'
import App1 from './Components/check/display'
import PictureSlider from './Components/check/Slider'
import Secound from './Components/secound_bar/Secound'
import Third_bar from './Components/third_bar/third_bar'
import Final from './Components/final/final'
import Footer from './Components/footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollComponent from './Components/check/Slider'



function Layout() {
  return (
    <div>
      <Header />
     <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
