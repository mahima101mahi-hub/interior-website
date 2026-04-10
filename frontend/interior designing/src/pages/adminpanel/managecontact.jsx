import { useEffect, useState } from "react";
import axios from "axios";
import "./managecontact.css";

function ManageContact() {
  const [data, setData] = useState([]);

  // FETCH DATA
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/inquiry/all");
      setData(res.data);
    } catch (err) {
      console.log(err);
      alert("Error fetching contacts ❌");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // DELETE
  const deleteContact = async (id) => {
    const confirmDelete = window.confirm("Delete this contact?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/inquiry/dell${id}`);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="contact-container">

      <h2>Manage Contacts</h2>

      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4">No contacts found</td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item._id}>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td>{item.Message}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteContact(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

    </div>
  );
}

export default ManageContact;