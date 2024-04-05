import React, { useEffect, useState } from 'react'
import { IoReloadSharp } from "react-icons/io5";
import './App.css'
import { NavLink } from 'react-router-dom';




function Loading(props) {
  const [loading, setloading] = useState(true)
  const [windows, setwindows] = useState(false);


  const [showScrollListener, setShowScrollListener] = useState(false);
  const [hieht, sethieht] = useState()

  useEffect(() => {
    const handleScroll = () => {
      // Your scroll event logic goes here
      console.log('Scrolled');
    };

    if (showScrollListener) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showScrollListener]);

  useEffect(() => {
    const handleScrollPosition = () => {
      sethieht(window.scrollY)//115
      if (window.scrollY >= 115) { // Adjust the scroll position threshold as needed
        if (props.on==true) {
                setShowScrollListener(true);
        setwindows(true);
  
        }
      } else {
        setShowScrollListener(false);
        setwindows(false);

      }
    };

    window.addEventListener('scroll', handleScrollPosition);

    return () => {
      window.removeEventListener('scroll', handleScrollPosition);
    };
  }, []);

console.log(props);

  useEffect(() => {
    if (window.scrollY<115) {

    }
    else if(window.scrollY>=115){
    
     
    }
 console.log(window.scrollY);
  }, [])


  setTimeout(() => {
    setloading(false)
  }, 2000);
  return (
    <>
    {loading?
      <div className="loading_holder">
        <div className="ico_loading">
          <IoReloadSharp size={30} style={{ color: 'yellow' }} />
        </div>
      </div>
      :''}

    {  windows? <div className="button_appleHel_dhd">
         <NavLink  className='NavLink'  to={'Form'}> <button className='button_10'>Apply For Help</button></NavLink>
        </div>:''
}
    </>
  )
}

export default Loading
