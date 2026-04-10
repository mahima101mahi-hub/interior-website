import { useEffect, useState } from "react";
import axios from "axios";
import "./admindashboard.css";

function Dashboard() {
  const [designs, setDesigns] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/design/all");
      setDesigns(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dashboard">

      <h2 className="dash-title">Welcome Admin 👑</h2>

      {/* STATS */}
      <div className="stats-container">

        <div className="stat-card">
          <h3>{designs.length}</h3>
          <p>Total Designs</p>
        </div>

        <div className="stat-card">
          <h3>6</h3>
          <p>Categories</p>
        </div>

        <div className="stat-card">
          <h3>--</h3>
          <p>Users</p>
        </div>

      </div>

      {/* RECENT */}
      <h3 className="section-title">Recent Designs</h3>

      <div className="recent-grid">
        {designs.slice(0, 4).map((item) => (
          <div className="recent-card" key={item._id}>
            <img src={item.Image} alt="" />
            <p>{item.Title}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Dashboard;