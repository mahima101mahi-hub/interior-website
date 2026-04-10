import { useEffect, useState } from "react";
import axios from "axios";
import "./manageappointment.css";

function ManageAppointment() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ FETCH ALL APPOINTMENTS
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/appoinment/all");
      setData(res.data || []);
    } catch (err) {
      console.error("Error fetching data:", err.response || err.message);
      alert("Error fetching appointments ❌");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ DELETE APPOINTMENT
  const deleteAppointment = async (id) => {
    if (!window.confirm("Delete this appointment?")) return;

    try {
      await axios.delete(`http://localhost:3000/appoinment/dell/${id}`);
      fetchData();
    } catch (err) {
      console.error("Error deleting appointment:", err.response || err.message);
    }
  };

  // ✅ UPDATE STATUS
  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:3000/appoinment/ById/${id}`, { Status: status });
      fetchData();
    } catch (err) {
      console.error("Error updating status:", err.response || err.message);
    }
  };

  if (loading) return <p>Loading appointments...</p>;

  return (
    <div className="appointment-container">
      <h2>Manage Appointments</h2>
      {data.length === 0 ? (
        <p>No appointments found</p>
      ) : (
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Theme</th>
              <th>Room</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td>{item.Phone}</td>
                <td>{item.SelectTheme}</td>
                <td>{item.SelectRoomType}</td>
                <td>{item.AppoinmentDate}</td>
                <td>{item.TimeSlot}</td>
                <td>{item.Status}</td>
                <td>
                  {item.Status !== "Confirmed" && (
                    <button
                      className="confirm-btn"
                      onClick={() => updateStatus(item._id, "Confirmed")}
                    >
                      Confirm
                    </button>
                  )}
                  {item.Status !== "Cancelled" && (
                    <button
                      className="cancel-btn"
                      onClick={() => updateStatus(item._id, "Cancelled")}
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    className="delete-btn"
                    onClick={() => deleteAppointment(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ManageAppointment;