import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./profile.css";

function Profile({ closeProfile }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const savedData = localStorage.getItem("user");
        if (!savedData) return setLoading(false);

        const parsedUser = JSON.parse(savedData);
        const userId = parsedUser.id || parsedUser._id;

        const response = await axios.get(`http://localhost:3000/user/ById/${userId}`);
        setUser(response.data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  if (loading)
    return (
      <div className="profile-container dark-mode">
        <div className="loader"></div>
      </div>
    );

  if (!user)
    return (
      <div className="profile-container dark-mode">
        <p>User not found. Please <a href="/login">login</a>.</p>
      </div>
    );

  return (
    <div className="profile-container dark-mode">
      <div className="small-dark-card profile-bg">
        {/* Header */}
        <div className="card-header-dark">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User"
            className="mini-avatar"
          />
          <div className="header-text">
            <h4>{user?.FirstName} {user?.LastName}</h4>
            <span className="user-role-tag">{user?.Role || "Client"}</span>
          </div>
        </div>

        {/* Body */}
        <div className="card-body-dark">
          <div className="data-row">
            <span className="data-label">Email</span>
            <p className="data-value">{user?.Email}</p>
          </div>
          <div className="data-row">
            <span className="data-label">Phone</span>
            <p className="data-value">{user?.PhoneNumber || "N/A"}</p>
          </div>
          <div className="data-row">
            <span className="data-label">Address</span>
            <p className="data-value address">{user?.Address || "No address set"}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mini-footer">
          <button className="text-btn logout-red" onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
          }}>Logout</button>
          <button onClick={() => navigate("/UserApponintment")}>Appointment Status</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;