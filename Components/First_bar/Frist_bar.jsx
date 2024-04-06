import React from 'react'
import './Frist_bar.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
function Frist_bar() {
  return (
    <div>


      <div className="first_holder">
        <div className="video_holder_fh">
          {/* <video  autoPlay controls src=""  ></video> */}
          <iframe className='video_fd'
  src='https://youtu.be/CbJmqdv-jlU'
  frameborder='0'
  allow='autoplay; '
 
  title='video'
/>
        </div>
        <div className="picture_holder_fh">
          <div className="up_ph_fh shadow-sm bg-body-tertiary">
            <img src="/Images/8a03484678612576c22b009b6db5d6e4.jpg" alt="" />

          </div>
          <div className="down_holder_fh  shadow-sm bg-body-tertiary">
            <img src='https://smhos.org/assets.smhos.org//photos/home/12noon.jpg' alt="" />
            
          </div>
        </div>
      </div>


      <div className="small_sceam">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active img_holder_sms" data-bs-interval="10000">
              <img  className='img_silder_sm' src="/Images/12noon.jpg" alt="" />
            </div>
            <div className="carousel-item img_holder_sms" data-bs-interval="2000" />
            <img className='img_silder_sm'  src="https://smhos.org/assets.smhos.org//photos/home/12noon.jpg" alt="" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Frist_bar
