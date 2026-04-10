import { useState, useEffect } from "react";
import "./themetype.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Type() {
  const { theme } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [active, setActive] = useState("All");

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/design/all");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data
    .filter(
      (item) =>
        item.Theme?.toLowerCase().trim() ===
        theme?.toLowerCase().trim()
    )
    .filter((item) =>
      active === "All" ? true : item.Category === active
    );

  return (
    <div className="luxury-container">

      <h2 className="page-title">
        {theme?.charAt(0).toUpperCase() + theme?.slice(1)} Designs
      </h2>

      <div className="luxury-layout">

        {/* SIDEBAR */}
        <div className="category-sidebar">
          {["All", "LivingRoom", "Kitchen", "BedRoom", "BathRoom"].map(
            (item) => (
              <button
                key={item}
                className={active === item ? "active" : ""}
                onClick={() => setActive(item)}
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* CARDS */}
        <div className="luxury-cards">
          {filteredData.length === 0 ? (
            <p>No designs found</p>
          ) : (
            filteredData.map((item) => (
              <div
                className="card"
                key={item._id}
                onClick={() =>
                  navigate(`/design/${item._id}`, {   // ✅ FIXED
                    state: item,                     // ✅ PASS FULL DATA
                  })
                }
              >
                <img src={item.Image} alt={item.Title} />
                <h3>{item.Title}</h3>
                <p className="category">{item.Category}</p>
                <p className="desc">{item.Description}</p>
                <p className="budget">{item.BudgetRange}</p>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default Type;