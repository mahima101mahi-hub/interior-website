import './user.css'
import { FaUser, FaEnvelope, FaPhone, FaHome, FaLock } from "react-icons/fa";
import axios from 'axios';
import { useState } from 'react';
function Reg() {
    const [formData,setFormData]=useState({
        FirstName:"",
        LastName:"",
        Email:"",
        PhoneNumber:"",
        Address:"",
        Password:""
    })
        function handleChange(e) {
            console.log(e);
            const{value,name}=e.target
            setFormData(()=>({
                ...formData,
                [name]:value
            }));
        }
            async function handleSubmit(e) {
                e.preventDefault()
                console.log(formData);
                try {
                    const response=await axios.post("http://localhost:3000/user",formData)
                alert(response.data || "ADDED SUCCESSFULLY ✅")

                } catch (error) {
                    console.log(error);
                    alert("internal server error")
                }
            
        }
    return(
        <>
        <div className="box2">
        <form className="form_reg"  onSubmit={handleSubmit}>
            <p>Register Here</p>
            <label >FirstName</label>
            <div className="input-box">
            <FaUser className='icon'/>
            <input type="text" placeholder="Enter the FirstName" name="FirstName" value={formData.FirstName} onChange={handleChange}/></div>
            
            <label >LastName</label>
            <div className="input-box">
            <FaUser className='icon'/>
            <input type="text" placeholder="Enter the LastName" name="LastName" value={formData.LastName}  onChange={handleChange}/></div>
           
            <label >Email</label>
            <div className="input-box">
            <FaEnvelope className='icon'/>
            <input type="text" placeholder="Enter the Email" name="Email"  value={formData.Email}  onChange={handleChange}/> </div>

            <label >PhoneNumber</label>
            <div className="input-box">
            <FaPhone className='icon'/>
            <input type="text" placeholder="Enter the PhoneNumber" name="PhoneNumber"  value={formData.PhoneNumber} onChange={handleChange} /></div>
           
             <label >Address</label>
             <div className="input-box">
            <FaHome className='icon'/>
            <input type="text" placeholder="Enter the Address" name="Address"  value={formData.Address} onChange={handleChange}/></div>
            
             <label >Password</label>
             <div className="input-box">
            <FaLock className='icon'/>
            <input type="password" placeholder="Enter the Password" name="Password"   value={formData.Password}   onChange={handleChange}/></div>
            <div className="btn_reg"><button>Register</button></div>
        </form>
        </div>
  
        </>
    )
}
export default Reg