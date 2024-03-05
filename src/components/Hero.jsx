import React from 'react'
import arrow from '../assets/arrowdown.png'
import Button from './button'

export default function Hero() {
  return (
    <div className='hero-container'>
        <div className="hero-container__content">
            <div className="hero-container__content_main">
                <div className="hero-container__content_main_side">
                <p> Book an orientation with  <span>Liam Brooks</span></p>
                </div>

                <div className="hero-container__content_main_content">

                    <div className="hero-container__content_main_content_text">
                    <span>(1)</span> 
                        <h1>We Love <br></br> Minimalism.</h1>
                        <h5>Interior design</h5>
                        <Button text="View projects"/>
                    </div>
                    <div className="hero-container__content_main_content_scroll">
                        <img src={arrow} alt='arrow'/>
                    </div>
                
                </div>
               
            </div>
            <div className="hero-container__content_image">
                <div className="hero-container__content_main_content"></div>
                <div className="hero-container__content_main_image"></div>
            </div>
        </div>
      
    </div>
  )
}
