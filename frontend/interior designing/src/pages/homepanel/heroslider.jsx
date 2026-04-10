import React from "react";
import Slider from "react-slick";
import "./home.css"; // make sure this is imported
import { useNavigate } from "react-router-dom";

const HeroSlider = () => {
  const navigate=useNavigate()
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700,
    arrows: true,
  };

  // ✅ Add text with images
  const slides = [
    {
      img: "/image/photo-1618221195710-dd6b41faaea6.avif",
      title: "Luxury Interiors",
      desc: "Make your home elegant & stylish"
    },
    {
      img: "/image/originalfile1769165698904-875.jpg",
      title: "Modern Living",
      desc: "Design that defines comfort"
    },
    {
      img: "/image/modern-chandeliers-1024x666.jpg",
      title: "Premium Lighting",
      desc: "Light up your lifestyle"
    },
    {
      img: "/image/industrial-rustic-living-room-in-earthy-tones.jpg",
      title: "Rustic Designs",
      desc: "Warm and aesthetic spaces"
    },
    {
      img: "/image/istockphoto-1824615178-612x612.jpg",
      title: "Creative Ideas",
      desc: "Turn imagination into reality"
    }
  ];

  return (
    <div className="hero-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.img} alt={`Slide ${index}`} />

            {/* 🔥 TEXT OVERLAY */}
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <button className="hero-btn" onClick={()=> navigate('/theme')}>Explore</button>
            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;