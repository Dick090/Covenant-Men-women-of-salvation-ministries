import React from 'react'
import './Frist_bar.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'

function Frist_bar() {
  return (
    <div>


      <div className="first_holder">
        <div className="video_holder_fh">
          <video onPlay={1} autoPlay controls src="https://youtu.be/CbJmqdv-jlU" className='video_fd' ></video>
        </div>
        <div className="picture_holder_fh">
          <div className="up_ph_fh shadow-sm bg-body-tertiary">
            <img src="../public/images/omd.jpg" alt="" />

          </div>
          <div className="down_holder_fh  shadow-sm bg-body-tertiary">
            <img src="../public/images/12noon.jpg" alt="" />
          </div>
        </div>
      </div>


      <div className="small_sceam">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active img_holder_sms" data-bs-interval="10000">
              <img  className='img_silder_sm' src="../public/images/omd.jpg" alt="" />
            </div>
            <div className="carousel-item img_holder_sms" data-bs-interval="2000" />
            <img className='img_silder_sm'  src="../public/images/12noon.jpg" alt="" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Frist_bar
