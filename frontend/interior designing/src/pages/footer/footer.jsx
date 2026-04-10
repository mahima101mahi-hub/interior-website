import React from "react";
import "./footer.css"; 
import {  useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate=useNavigate()
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>Interior Studio</h2>
          <p>
            Transforming spaces into elegant experiences. We design homes that reflect your lifestyle.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/theme')}>Theme</li>
            <li onClick={() => navigate('/appoinmnet')}>Appointment</li>
            <li onClick={() => navigate('/contact')}>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: design@gmail.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: Punjab, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Interior Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;