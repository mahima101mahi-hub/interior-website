import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./designdetail.css";

function DesignDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const item = location.state;

  if (!item) return <h2>No Design Found</h2>;

  return (
    <div className="details-container">
      <div className="details-card">

        <img src={item.Image} alt={item.Title} />

        <div className="details-info">
          <h2>{item.Title}</h2>
          <p><b>Theme:</b> {item.Theme}</p>
          <p><b>Category:</b> {item.Category}</p>
          <p><b>Description:</b> {item.Description}</p>
          <p><b>Budget:</b> {item.BudgetRange}</p>

          <button
            className="book-btn"
            onClick={() =>
              navigate("/appoinmnet", {
                state: {
                  design: item   // ✅ FULL OBJECT PASS
                },
              })
            }
          >
            Book Appointment
          </button>
        </div>

      </div>
    </div>
  );
}

export default DesignDetails;