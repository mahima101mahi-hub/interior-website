import { NavLink, Outlet } from "react-router-dom";
import "./adminLayout.css";
import { FaHome, FaPaintBrush, FaCalendar, FaEnvelope } from "react-icons/fa";

function AdminLayout() {
  return (
    <div className="admin-container">

      {/* SIDEBAR */}
      <div className="admin-sidebar">
        <div>
          <h2 className="logo">Admin Panel</h2>

          <nav>
            <NavLink 
              to="/admin" 
              end 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FaHome /> Dashboard
            </NavLink>

            <NavLink 
              to="/admin/designs" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FaPaintBrush /> Manage Designs
            </NavLink>

            <NavLink 
              to="/admin/appointments" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FaCalendar /> Appointments
            </NavLink>

            <NavLink 
              to="/admin/contacts" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <FaEnvelope /> Contacts
            </NavLink>
          </nav>
        </div>

        {/* LOGOUT BUTTON */}
        <button
          className="logout"
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>

      {/* CONTENT */}
      <div className="admin-content">
        <Outlet />
      </div>

    </div>
  );
}

export default AdminLayout;