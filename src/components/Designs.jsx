import React from 'react'

export default function Designs() {
  return (
    <section className='designs-container'>
      <div className='designs-container_content' >
        <div className='designs-container_content_text'>
          <div className='designs-container_content_text_item'>
            <h2>Designed for you</h2><span>(3)</span>
          </div>
          <div className='designs-container_content_text_item'>
            <p>We’ve designed and curated pieces that are a cut above your average home goods, because <br></br> when you level up your everyday objects, you elevate your daily rituals. Let the magic happen.</p>
          </div>
        </div>
        <div className='designs-container_content_grid'>
          <div id='grid-item-first' className='designs-container_content_grid_grid-item'></div>
          <div id='grid-item-second' className='designs-container_content_grid_grid-item'></div>
          <div id='grid-item-third' className='designs-container_content_grid_grid-item'></div>
          <div id='grid-item-forth' className='designs-container_content_grid_grid-item'></div>
        </div>
      </div>
    </section>
  )
}
