import {
  FaCalendar,
  FaClock,
  FaEnvelope,
  FaPhone,
  FaUser
} from "react-icons/fa";
import "./appoinment.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Appoinmnet() {

  const token = localStorage.getItem("token");
  const userId = token ? JSON.parse(token) : null;

  const location = useLocation();
  const navigate = useNavigate();

  const selectedDesign = location.state?.design;

  // ❌ BLOCK ACCESS IF NO DESIGN
  if (!selectedDesign) {
    return (
      <div className="appointment-wrapper">
        <div className="no-design">
          <h2>⚠️ No Design Selected</h2>
          <p>Please select a design before booking an appointment.</p>
          <button onClick={() => navigate("/theme")}>
            Go to Designs
          </button>
        </div>
      </div>
    );
  }

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    SelectTheme: "",
    SelectRoomType: "",
    AppointmentDate: "",
    TimeSlot: "",
    Message: "",
    PaymentMethod: "",
    upiId: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    userId: userId,
  });

  // ✅ AUTO FILL FROM DESIGN
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      SelectTheme: selectedDesign.Theme,
      SelectRoomType: selectedDesign.Category,
      Message: `Interested in ${selectedDesign.Title}`,
    }));
  }, [selectedDesign]);

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!userId) {
      alert("Please login first");
      return;
    }

    if (!formData.PaymentMethod) {
      alert("Select payment method");
      return;
    }

    try {
      alert("💳 Payment Successful!");

      await axios.post("http://localhost:3000/appoinment", formData);

      alert("🎉 Appointment Booked Successfully!");
    } catch (error) {
      console.log(error.response?.data || error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <div className="appointment-wrapper">

      {/* ✅ SELECTED DESIGN */}
      <div className="selected-design">
        <img src={selectedDesign.Image} alt="" />
        <div>
          <h3>{selectedDesign.Title}</h3>
          <p>{selectedDesign.Theme} | {selectedDesign.Category}</p>
          <p>₹ {selectedDesign.BudgetRange}</p>
        </div>
      </div>

      <form className="appoinment-box" onSubmit={handleSubmit}>
        <h2>Book Your Appointment</h2>

        {/* NAME */}
        <label>Name</label>
        <div className="input-box">
          <FaUser className="icon" />
          <input name="Name" value={formData.Name} onChange={handleChange} required />
        </div>

        {/* EMAIL */}
        <label>Email</label>
        <div className="input-box">
          <FaEnvelope className="icon" />
          <input type="email" name="Email" value={formData.Email} onChange={handleChange} required />
        </div>

        {/* PHONE */}
        <label>Phone</label>
        <div className="input-box">
          <FaPhone className="icon" />
          <input name="Phone" value={formData.Phone} onChange={handleChange} required />
        </div>

        {/* THEME */}
        <label>Theme</label>
        <input value={formData.SelectTheme} disabled />

        {/* ROOM */}
        <label>Room</label>
        <input value={formData.SelectRoomType} disabled />

        {/* DATE */}
        <label>Date</label>
        <div className="input-box">
          <FaCalendar className="icon" />
          <input
            type="date"
            name="AppointmentDate"
            value={formData.AppointmentDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            required
          />
        </div>

        {/* TIME */}
        <label>Time</label>
        <div className="input-box">
          <FaClock className="icon" />
          <input
            name="TimeSlot"
            placeholder="10:00 AM"
            value={formData.TimeSlot}
            onChange={handleChange}
            required
          />
        </div>

        {/* PAYMENT */}
        <label>Payment Method</label>
        <div className="payment-options">

          <label className="payment-card">
            <input type="radio" name="PaymentMethod" value="UPI" onChange={handleChange} />
            UPI
          </label>

          <label className="payment-card">
            <input type="radio" name="PaymentMethod" value="CARD" onChange={handleChange} />
            Card
          </label>

        </div>

        {/* UPI */}
        {formData.PaymentMethod === "UPI" && (
          <input
            name="upiId"
            placeholder="Enter UPI ID"
            onChange={handleChange}
            required
          />
        )}

        {/* CARD */}
        {formData.PaymentMethod === "CARD" && (
          <>
            <input name="cardNumber" placeholder="Card Number" onChange={handleChange} required />
            <input name="expiry" placeholder="MM/YY" onChange={handleChange} required />
            <input name="cvv" placeholder="CVV" onChange={handleChange} required />
          </>
        )}

        <button type="submit" className="submit-btn">
          Book & Pay
        </button>

      </form>
    </div>
  );
}

export default Appoinmnet;