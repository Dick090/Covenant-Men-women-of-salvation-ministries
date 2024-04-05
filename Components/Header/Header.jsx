import React, { useState } from 'react'
import './Header.css'
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { IoReloadSharp } from "react-icons/io5";
function Header() {
const [none, setnone] = useState(true)
const [displayornot, setdisplayornot] = useState()




  const remover_menu = () => {
       setnone((none)=>!none)
       none?setdisplayornot({display:'block'}):setdisplayornot({display:'none'})

  }
  return (
    <div className='header_holder'>
      <div className="up_header">
        <div className="text_for_bible_q">
          <h4>Methew 10:1 </h4>
          <h5>freely you have received, Freely give </h5>
        </div>
        <img className='Front_img_hd' src="https://media.giphy.com/media/lt9KUZGnXZXhe/giphy.gif" alt="" />


      </div>

      <div className="down_part_header" >

       <NavLink className="img_dhd" to={"Home"}> 
          <img src="https://smhos.org/assets/media/photos/general/logo.png" alt="" />
        </NavLink>
        <div className="manu_dhd" >
        <NavLink className='home'  to={"/"} >  <p className='ho'>home</p></NavLink>
       <a  className='home' href="https://smhos.org/livestreaming/" target="_blank" rel="noopener noreferrer"><p>live</p></a>
        <NavLink className='home' to={"TheChurch"}><p>the church</p></NavLink>  
        <NavLink to={'Give'} className='home'> <p>Give</p></NavLink>  
          <a className='home' href="https://smhosstore.com/" target="_blank" rel="noopener noreferrer"><p>e-store</p></a>
       </div>
        <div className="button_appleHelp_dhd">
         <NavLink  className='NavLink'  to={'Form'}> <button className='button_10'>Apply For Help</button></NavLink>
          <div className="menu_holder"><IoMenu size={30} onClick={remover_menu} />

          </div>
        </div>
      </div>

<div className="control_menu">
      <div className="menu_dwon" style={displayornot}>

        <div className="remover_menu_down" onClick={remover_menu}>
          <h1>x</h1>
        </div>
        <div className="home_div">
         
            <NavLink onClick={remover_menu} className='NavLink' to={"Home"}> <p > home  </p></NavLink>  
          <div className="line_1"></div> 
        </div>
        <div className="home_div">
      <a className='NavLink ' href="https://smhos.org/livestreaming/"><p> live</p></a> 
          <div className="line_1"></div>
        </div>
        <div className="home_div">
        <NavLink onClick={remover_menu} className='NavLink' to={'TheChurch'}> <p>the church</p></NavLink>  
          <div className="line_1"></div>
        </div>
        <div className="home_div">
        <NavLink to={'Give'} className='NavLink'> <p>Give</p></NavLink>  
          <div className="line_1"></div>
        </div>
        <div className="home_div">
       <a  href="https://smhosstore.com/" className='NavLink' target="_blank" rel="noopener noreferrer"> <p>e-store</p></a>
          <div className="line_1"></div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Header
