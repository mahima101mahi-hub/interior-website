import { useContext, useState} from 'react';
import './navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import { LogContext} from '../context/logincontext';
function Navbar() {
    const navigate= useNavigate();
    const{Log, setLog}=useContext(LogContext)
    console.log(Log);
const [open, setOpen] = useState(false);
    function Logout() {
        localStorage.removeItem("token")
        setLog(false)
        navigate("/login")
        
    }
    
    return(
        <>
            <div className="nav-form">
                <div className="log">
                    <img src="/image/Sophisticated interior design logo.png" style={{height:"100px", width:"100px"}} />
                </div>
                <ul className="nav-list">
                    <li onClick={()=> navigate('/')}>Home</li>
                    <li onClick={()=> navigate('/theme')}>Themes</li>
                    <li className="design-dropdown">
                        Designs ▾
                    <div className="design-menu">
                    <p onClick={() => navigate("/type/luxury")}>Luxury</p>
                    <p onClick={() => navigate("/type/modern")}>Modern</p>
                    <p onClick={() => navigate("/type/minimalist")}>Minimalist</p>
                    <p onClick={() => navigate("/type/rustic")}>Rustic</p>
                    <p onClick={() => navigate("/type/traditional")}>Traditional</p>
                    <p onClick={() => navigate("/type/industrial")}>Industrial</p>
                     </div>
                    </li>
                    <li onClick={()=> navigate('/appoinmnet')}>Appointment</li>
                    <li onClick={() => navigate('/contact')}>Contact</li>
                </ul>

                <div className="nav-profile">
                    <button onClick={ ()=> setOpen(!open)}>Profile ▼</button>
                   
                   {open && (
                    <div className="dropdown">
                    {Log ?(
                        <>
                        
                            <button onClick={()=> navigate('/profile')}> My Profile</button>
                            <button className='menu-btn'  onClick={Logout}>Logout</button>
                            </>
                        ):(
                            <>
                        <button onClick={()=> navigate("/reg")}>Registration </button>
                        <Link to='/login'> 
                            <button className="menu-btn">Login</button>
                            </Link>
                            </>
                            
                        )
                        }
                    </div>
                    )}
                </div>
            </div>
        </>
    ); 
}
export default Navbar