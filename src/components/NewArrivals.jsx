import React, { useState } from "react";
import image from '../assets/card1.jpg'
import image1 from '../assets/card2.jpg'
import image2 from '../assets/card3.jpg'
import image3 from '../assets/card4.jpg'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const NewArrivals = () => {
  const [startX, setStartX] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const cardsPerPage = 1;
  const maxIndex = Math.ceil(items.length / cardsPerPage) - 1;

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
    const difference = startX - currentX;
    if (difference > 50) {
      handleNextSlide();
      setIsSwiping(false);
    } else if (difference < -50) {
      handlePrevSlide();
      setIsSwiping(false);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
  };

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  const slideStyle = {
    transform: `translateX(-${slideIndex * 100}%)`,
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <section className='new-arrivals-container'>
      <div className='new-arrivals-container_content'>
        <div className='new-arrivals-container_content_text'>
          <div  className='new-arrivals-container_content_text_item'>
          <h2>New Arrivals</h2><span>(3)</span>
          </div>
          <p>We’ve designed and curated pieces that are a cut above your average home goods, because when you level up your everyday objects, you elevate your daily rituals.</p>
          <button>View all</button>
        </div>
        <div className='new-arrivals-container_content_slider-container'
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
         onTouchEnd={handleTouchEnd}
        >
          <div className='new-arrivals-container_content_slider-container_slides'
          
          >
            {items.map((item, index) => (
              <div  key={index} style={slideStyle}>
              <div className='new-arrivals-container_content_slider-container_item'>
                <div className='new-arrivals-container_content_slider-container_slides_item_img'>
                  <img src={item.url} alt={item.title}/>
                </div>
                <div className='new-arrivals-container_content_slider-container_slides_item_details'>
                  <p className="title">{item.title}</p>
                  <p className="price">${item.price}</p>
                </div>
              </div>
              </div>
            ))}
          </div>
          <div style={{display:'flex'}} className='new-arrivals-container_content_slider-container_controls'>
            <div className="line"></div>

          <div onClick={handlePrevSlide}>
               <span> <IoIosArrowBack /></span>
              </div>
              <div onClick={handleNextSlide}>
                <span><IoIosArrowForward /></span>
              </div>
          </div>

        </div>
      </div>
    </section>
  )
}
export default NewArrivals;

const items = [
  {
    url: image,
    title: "Arm Sofas",
    price: "45.80"
  },
  {
    url: image1,
    title: "Living table",
    price: "45.80"
  },
  {
    url: image2,
    title: "Floor lamp",
    price: "45.80"
  },
  {
    url: image3,
    title: "Arm Sofas",
    price: "45.80"
  },
]