  import "./login.css";
  import axios from "axios";
  import { useContext, useState } from "react";
  import { FaEnvelope, FaLock } from "react-icons/fa";
  import { LogContext } from "../context/logincontext";
  import { useNavigate } from "react-router-dom";

  function Login() {
    const [formData, setFormData] = useState({
      Email: "",
      Password: "",
    });

    const { setLog } = useContext(LogContext);
    const navigate = useNavigate();

    // HANDLE INPUT CHANGE
    function handleChange(e) {
      const { value, name } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // HANDLE LOGIN
    async function handleSubmit(e) {
      e.preventDefault();

      try {
        const response = await axios.post(
          "http://localhost:3000/user/login",
          formData
        );

        // 🔥 GET USER FROM BACKEND
        const user = response.data.user;

        // SAVE USER IN LOCAL STORAGE
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(user.id));
        

        // LOGIN CONTEXT
        setLog(user.id);

        alert("Login successful ✅");

        // 🔥 ADMIN CHECK
        if (user.email === "admin@gmail.com") {
          navigate("/admin"); // ADMIN PANEL
        } else {
          navigate("/"); // NORMAL USER
        }

      } catch (error) {
        console.log(error);
        alert("Login failed ❌");
      }
    }

    return (
      <div className="form-box1">
        <form className="form_login" onSubmit={handleSubmit}>

          <h2>Login Here</h2>

          {/* EMAIL */}
          <label>Email</label>
          <div className="input-box1">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="Email"
              placeholder="Enter the Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>

          {/* PASSWORD */}
          <label>Password</label>
          <div className="input-box1">
            <FaLock className="icon" />
            <input
              type="password"
              name="Password"
              placeholder="Enter the Password"
              value={formData.Password}
              onChange={handleChange}
              required
            />
          </div>

          {/* BUTTON */}
          <div className="btn_login">
            <button type="submit">Login</button>
          </div>

        </form>
      </div>
    );
  }

  export default Login;