import { useEffect, useState } from 'react'
import './theme.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Theme() {
  const cat = {
     "modern": "/image/38be8c612aff0e28bfa041158bf5e62a.jpg" ,
     "luxury": "/image/3b9bbb04-9a9a-443d-903d-7a9d851b681e.png" ,
     "minimalist": "/image/c6883b6440d54aa57ed2f48f83d57a4c.jpg" ,
     "rustic": "/image/26456336845f3a4fd998a63580f9e693.jpg" ,
     "traditional": "/image/36af49e3-e1ab-405e-a29e-78abc4e7f7d3.png" ,
     "industrial": "/image/cd2d9811f57ee8846ed1181c235675d9.jpg" 
  }
  const navigate=useNavigate();

  const [data, setData] = useState([])

  async function GetData() {
    try {
      const response = await axios.get("http://localhost:3000/theme/all")
      console.log(response);
      setData(response.data)
      
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
      GetData()
  }, [])
  return (
    <>
      <div className="theme-grid">

        {
        
          data.map((value,index)=>(
            <div className="theme-card">
          <img src={cat[value.ThemeCategory.toLowerCase()]} />
          <h3>{value.ThemeCategory}  THEME</h3>

          <p>Clean and stylish interiors</p>
          <button onClick={()=> navigate(`/type/${value.ThemeCategory.toLowerCase()}`)}>View</button>
        </div>
          ))
        }

        {/* <div className="theme-card">
          <img src="/image/3b9bbb04-9a9a-443d-903d-7a9d851b681e.png" />
          <h3 >Luxury Theme</h3>
          <p>Elegant and premium look</p>
          <button>View</button>

        </div>

        <div className="theme-card">
          <img src="/image/c6883b6440d54aa57ed2f48f83d57a4c.jpg" />
          <h3>Minimal Theme</h3>
          <p>Simple and neat design</p>
          <button>View</button>

        </div>

        <div className="theme-card">
          <img src="/image/26456336845f3a4fd998a63580f9e693.jpg" />
          <h3>Rustic Theme</h3>
          <p>Natural and warm feel</p>
          <button>View</button>

        </div>
        <div className="theme-card">
          <img src="/image/36af49e3-e1ab-405e-a29e-78abc4e7f7d3.png" />
          <h3>Traditional Theme</h3>
          <p>Natural and warm feel</p>
          <button>View</button>

        </div>
        <div className="theme-card">
          <img src="/image/cd2d9811f57ee8846ed1181c235675d9.jpg" />
          <h3>Industrial Theme</h3>
          <p>Natural and warm feel</p>
          <button>View</button>

        </div> */}

      </div>
    </>
  )
}
export default Theme