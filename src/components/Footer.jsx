import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import image1  from '../assets/follow.jpg';
import image2  from '../assets/follow1.jpg';
import image3  from '../assets/follow2.jpg';
import image4  from '../assets/follow3.jpg';
import Button from './button';

export default function Footer() {
  return (
    <section className='footer-container'>
      <div className='footer-container_content'>
        <div className='footer-container_content__followus-container'>
        <div className='footer-container_content__followus-container_text' >
          <div><h4>#design</h4></div>
          <div className='footer-container_content__followus-container_text_item' ><span><AiFillInstagram /></span><p>Follow us on Instagram</p></div>
        </div>
        <div className='footer-container_content__followus-container_images'>
          <div className='footer-container_content__followus-container_images_item'>
          <img src={image1}/>
          </div>
          <div className='footer-container_content__followus-container_images_item'>
          <img src={image2}/>
          </div>
          <div className='footer-container_content__followus-container_images_item'>
          <img src={image3}/>
          </div>
          <div className='footer-container_content__followus-container_images_item'>
          <img src={image4}/>
          </div>
         
        </div>
        </div>
        <footer className='footer-container_content__footer'>
          <div className='footer-container_content__footer_content'>
            <div className='footer-container_content__footer_content_socials'>
              <h2>LIAM BROOKS</h2>
              <div className='footer-container_content__footer_content_socials_icons'>
              <span><AiFillInstagram  /></span>
          <span><FaFacebookF  /></span>
          <span><SiLinkedin  /></span>
              </div>
            </div>
            <div className='footer-container_content__footer_content_credits'>
              <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', gap:'5px'}}>
              <p>Designed by </p> <a href='https://www.figma.com/@ignaprados'>@ignaprados</a>
              </div>
              <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', gap:'5px'}}>
              <p>Developed by </p> <a href='https://tijanadjportfolio.vercel.app/'>t.</a>
              </div>
            </div>
          </div>
          <div className='footer-container_content__footer_talk'>
            <p>Ready to get started?</p>
            <Button text="Let's Talk"/>
          </div>
        </footer>
      </div>
    </section>
  )
}
