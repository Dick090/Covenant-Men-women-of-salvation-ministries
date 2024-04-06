import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import './Footer.css'
function Footer() {
  return (
    <div>
      <div className="footer_holder">
        <div className="icons_fd">
          <div className="ico_hol_fon">
            <FaFacebookF size={20} />
          </div>
          <div className="ico_hol_fon">
            <FaYoutube size={20} />
          </div>
          <div className="ico_hol_fon">
            <FaTwitter size={20} />
          </div>
          <div className="ico_hol_fon">
            <FaInstagramSquare className='ico_this' size={20} />
          </div>
        </div>
        <div className="text_footer">
          <p> powwered By Convent Men/women of  SALVATION MINISTRIES © 2024. </p>
        </div>


      </div>
    </div>
  )
}

export default Footer
