import { useState } from "react";
import "./contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    SelectTheme: "",
    SelectRoomType: "",
    Message: ""
  });

  // HANDLE INPUT CHANGE
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  // HANDLE SUBMIT
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/inquiry",
        formData
      );

      alert("Message Sent Successfully ✅");

      // reset form
      setFormData({
        Name: "",
        Email: "",
        Phone: "",
        SelectTheme: "",
        SelectRoomType: "",
        Message: ""
      });

    } catch (error) {
      console.log(error);
      alert("Something went wrong ❌");
    }
  }

  return (
    <div className="contact-wrapper">

      {/* HEADER */}
      <div className="contact-header">
        <h1>Let’s Design Your Dream Space ✨</h1>
        <p>We reply within 24 hours</p>
      </div>

      <div className="contact-container">

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>

          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="Phone"
            placeholder="Phone Number"
            value={formData.Phone}
            onChange={handleChange}
            required
          />

          <select
            name="SelectTheme"
            value={formData.SelectTheme}
            onChange={handleChange}
            required
          >
            <option value="">Select Theme</option>
            <option value="Luxury">Luxury</option>
            <option value="Modern">Modern</option>
            <option value="Minimalist">Minimalist</option>
            <option value="Traditional">Traditional</option>
            <option value="Rustic">Rustic</option>
            <option value="Industrial">Industrial</option>
          </select>

          <select
            name="SelectRoomType"
            value={formData.SelectRoomType}
            onChange={handleChange}
            required
          >
            <option value="">Select Room Type</option>
            <option value="LivingRoom">Living Room</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Bathroom">Bathroom</option>
          </select>

          <textarea
            name="Message"
            placeholder="Tell us about your project"
            value={formData.Message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* CONTACT INFO */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p><FaPhone /> +91 9876543210</p>
          <p><FaEnvelope /> design@gmail.com</p>
          <p><FaMapMarkerAlt /> Punjab, India</p>

          <div className="socials">
            <button>Instagram</button>
            <button>WhatsApp</button>
            <button>Facebook</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;