import React from 'react'
import './final.css'
import { FaQuoteLeft } from "react-icons/fa";

function Final() {
  return (
    <div>
      <div className="final_general">
        <div className="right_fin">
          <h2>TESTIMONIES FROM WORSHIPPERS</h2>
          <p>Your testimony is a proof of God's involvement in your affairs. Read inspiring testimonies & share yours.</p>
        </div>
        <div className="seco_fin">
          <div className="text_side">
            <div className="text_1_fin">
              <div className="img_sys">
                <FaQuoteLeft />
              </div>
              <div className="main_text_fin">
                <h4>
                  OYOKONISO REJOICE
                </h4>
                <p>
                  On the 4th of July, 2021, I took a substance that badly affected my health, to the point that I started urinating blood. I was physically weak. During the service on Sunday, the 11th of July, 2021, I partook of the Communion and immediately regained my strength. Later, when I went to the convenience, there was no blood in my urine. I have been made whole. I give God all the praise!
                </p>
              </div>
            </div>
            <div className="text_2_fin">
              <div className="img_sys">
                <FaQuoteLeft />
              </div>
              <div className="main_text2_fi">
                <h4>
                  ANDERSON ASEIMO
                </h4>
                <p>
                  I wanted to start my company but did not have sufficient funds to finance its registration. I decided to sow what I had into the life of Pastor David Ibiyeomie and his wife, Peace Ibiyeomie. When I did, not only was I favoured with money enough to register the company, the registration process was quick and seamless, and I was also favoured with a conducive office space. Glory to God!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Final
