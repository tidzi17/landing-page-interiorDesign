import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

export default function Navbar() {
  return (
    <nav className='navbar-container'>
      <div className="navbar-container__content">
        <div className="navbar-container__content_icons">
          <span><AiFillInstagram  /></span>
          <span><FaFacebookF  /></span>
          <span><SiLinkedin  /></span>
        </div>
        <div className="navbar-container__content_logo">
          <p>Liam Brooks</p>
        </div>
        <div className="navbar-container__content_menu">
        <span><RxHamburgerMenu  /></span>
        </div>
      </div>
    </nav>
  )
}
