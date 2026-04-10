import { useEffect, useState } from "react";
import axios from "axios";
import "./userProfileApp.css"; // ✅ import css

function UserApponintment() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH DATA
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/appoinment/all");
      setData(res.data || []);
    } catch (err) {
      console.error("Error:", err);
      setData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // STATUS CLASS
  const getStatusClass = (status) => {
    if (status === "Confirmed") return "status-confirmed";
    if (status === "Cancelled") return "status-cancelled";
    if (status === "Completed") return "status-completed";
    return "status-pending";
  };

  if (loading) return <p className="loading">Loading appointments...</p>;

  return (
    <div className="container">
      <h2 className="heading">Appointment Status</h2>

      {data.length === 0 ? (
        <p>No appointments found</p>
      ) : (
        <div className="grid">
          {data.map((item) => (
            <div key={item._id} className="card">
              <h3>{item.Name}</h3>

              <p><strong>Theme:</strong> {item.SelectTheme}</p>
              <p><strong>Room:</strong> {item.SelectRoomType}</p>
              <p><strong>Date:</strong> {item.AppoinmentDate}</p>
              <p><strong>Time:</strong> {item.TimeSlot}</p>

              <p>
                <strong>Status:</strong>
                <span className={`badge ${getStatusClass(item.Status)}`}>
                  {item.Status}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserApponintment;