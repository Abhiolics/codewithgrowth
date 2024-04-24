import React from 'react';
import './whatisCWG.css'
import Navim from "../../assets/Navim.png"
import linkedin from "../../assets/linkedin.svg";
import squareinstagram from "../../assets/squareinstagram.svg";
import twitter from "../../assets/twitter.svg";
import telegram from "../../assets/telegram.svg"

const WhatCWG = () => {
    return (
       <div className='content'>
        <section className='main-section'>
            <div className="content-left">
                <p className="section-label"> Very Proud to anniunce
                </p>
                <h1 className="section-title"> Heyyyyyyyyyyyyyyyyyyyyyy</h1>
                <p className="section-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem obcaecati minus maiores. Laboriosam veniam possimus aut optio deleniti dolor omnis nostrum vel fugiat non, molestias incidunt, iure corrupti alias blanditiis!</p>
                <div className="button-group">
                    <a href="#start" className='start-button'> Start Now</a>
                </div>
            </div>

            <div className="content-right">
          <div className="image-container">
    <img src={Navim}  className='section-image'/>
         </div>
            </div>
        </section>
       
          <div className="company-container">
            <h2 className='hl'>Trusted</h2>
            <div className="company-grid">
            <div className="company-logo">
            <img src={linkedin} alt="" className='svg-img' />
            <span className='logo-text'>LinkedIn</span>
            </div>
            <div className="company-logo">
            <img src={squareinstagram} alt="" className='svg-img' />
            <span className='logo-text'>Instagram</span>
            </div>
            <div className="company-logo">
            <img src={twitter} alt="" className='svg-img' />
            <span className='logo-text'>Twitter</span>
            </div>
            <div className="company-logo">
            <img src={telegram} alt="" className='svg-img' />
            <span className='logo-text'>Telegram</span>
            </div>
          </div>
          </div>
          </div>
    )
}

export default WhatCWG