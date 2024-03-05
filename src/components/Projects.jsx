import React from 'react'
import redesign from '../assets/redesign.png';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Projects() {
  return (

    <section className='projects-container'>
      <div className='projects-container_content'>
      
    <div className='projects-container_content_image'>
    <p>We design your <span>home.</span></p>
        <img src={redesign}  alt="Project" />
    </div>
    <button className="button left">
      <IoIosArrowBack  />
    </button>
    <button className="button right">
    <IoIosArrowForward  />
    </button>
    <div className='projects-container_content_text'>
        <h4>Project</h4>
        <div className='projects-container_content_text_heading'>
            <h2>Designed for you</h2><span>(3)</span>
          </div>
    </div>
      </div>
    </section>
    
  )
}
