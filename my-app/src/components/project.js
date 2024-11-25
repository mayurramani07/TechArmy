import React, { useState } from "react";
import './project.css'; 

function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: "https://www.southdelhifloors.com/wp-content/uploads/2019/04/florence-homes-south-delhi-builders.jpg",
      price: "6.5 Cr"
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/07/17/00/54/house-2511060_640.jpg",
      price: "7.5 Cr"
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/12/10/03/18/beautiful-3009151_640.jpg",
      price: "5.5 Cr"
    },
    {
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?cs=srgb&dl=pexels-expect-best-79873-323780.jpg&fm=jpg",
      price: "7.5 Cr"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeL2w72SkIFU4j5ntFEqM0VUY5KRbdzco0WL5zz1KPKH2NdNKF8MCFJS3cqAy2e1WAo-o&usqp=CAU",
      price: "5.8 Cr"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbMcc3uU4YJ6Zi_h7llZFLg5Tu9lHJpCnWpA&s",
      price: "5.5 Cr"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbMcc3uU4YJ6Zi_h7llZFLg5Tu9lHJpCnWpA&s",
      price: "6.5 Cr"
    }
  ];

  const totalSlides = cards.length;
  const cardWidth = 320;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="projects">
      <div className="project-content">
        <h2>Ongoing Projects</h2>
        <p>We are dedicated to helping you find your dream property with ease and confidence.</p>
      </div>
      <div className="cards">
        <div className="slider" style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}>
          {cards.map((card, index) => (
            <div className="card1" key={index}>
              <img src={card.image} alt={`Project ${index + 1}`} />
              <button>BOOK NOW</button>
              <div className="content">
                <p><i className="fa-solid fa-indian-rupee-sign"></i>{card.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>&#8249;</button>
        <button className="next" onClick={nextSlide}>&#8250;</button>
      </div>
    </div>
  );
}

export default Project;
