import { useState } from 'react'
import './category.css'
import axios from 'axios'
function Category() {
        const [formData,setFormData]=useState({
            ThemeCategory:""
        }) 
        function handleChange(e) {
            console.log(e);
            const{value,name}=e.target
            setFormData(()=>({
                ...formData,
                [name]:value
            }))
        }
        async function handleSubmit(e) {
            e.preventDefault()
            console.log(formData);
            try {
                const response=await axios.post("http://localhost:3000/theme",formData)
                console.log(response);
                alert(response.data || "ADD SUCCESFULLY")

                // alert({
                //     _id:67898,
                //     name:""
                // })
            } catch (error) {
                console.log(error);
                alert("internal server error")
            }
        }
    return(
        <>
        <form className='form' onSubmit={handleSubmit}>
        <div className="input-container">
        <label>Theme Category</label>
        <input type="text" placeholder="Enter theme" name='ThemeCategory' value={formData.ThemeCategory} onChange={handleChange}/>
        </div>
        {/* <div className="input-container">
        <label>Description</label>
        <input type="text" placeholder="Enter description" />
        </div> */}
        {/* <div className="input-container">
        <label>Starting price</label>
        <input type="text" placeholder="Enter price" />
        </div> */}
        <div className="btn">
            <button>SAVE</button>
        </div>
        </form>
        </>
    )
}

export default Category