import './home.css';
import React from "react";
import HeroSlider from "./heroslider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <div className="home-container">

      {/* HERO */}
      <HeroSlider />

      {/* INTRO */}
      <section className="intro">
        <h2>Welcome to Our Interior Design Studio</h2>
        <p>Explore our themes, projects, and design ideas.</p>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Our Designs</h2>

        <div className="gallery-grid">

          <div className="card">
            <img src="/image/luxury-bedroom-interior-design.jpg" alt="" />
            <h3>Luxury Bedroom</h3>
            <p>₹50,000</p>
          </div>

          <div className="card">
            <img src="/image/maxresdefault.jpg" alt="" />
            <h3>Modern Living Room</h3>
            <p>₹70,000</p>
          </div>

          <div className="card">
            <img src="/image/Pic-2.webp" alt="" />
            <h3>Kids Room</h3>
            <p>₹60,000</p>
          </div>

          <div className="card">
            <img src="/image/kitchen_design_ideas.webp" alt="" />
            <h3>Modular Kitchen</h3>
            <p>₹80,000</p>
          </div>

          <div className="card">
            <img src="/image/data_Looks_berlin2.jpg" alt="" />
            <h3>Living Room</h3>
            <p>₹90,000</p>
          </div>

          <div className="card">
            <img src="/image/ambiente-mueble-essence-c-bano-negro-madera.jpg" alt="" />
            <h3>Bathroom Design</h3>
            <p>₹40,000</p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="about-container">

          <div className="about-text">
            <h2>About Us</h2>
            <p>
              We transform ordinary spaces into beautiful interiors with creativity and elegance.
            </p>

            <div className="about-highlights">
              <div className="highlight">✨ 5+ Years</div>
              <div className="highlight">🏡 200+ Projects</div>
              <div className="highlight">🎨 Creative</div>
            </div>
          </div>

          <div className="about-image">
            <img src="/image/modernBedroom5.jpg" alt="" />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;