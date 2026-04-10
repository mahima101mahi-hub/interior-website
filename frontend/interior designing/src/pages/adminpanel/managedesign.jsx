import { useEffect, useState } from "react";
import axios from "axios";
import "./managedesign.css";

function ManageDesign() {
  const [data, setData] = useState([]);

  // FORM STATES
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("LivingRoom");
  const [theme, setTheme] = useState("modern");
  const [desc, setDesc] = useState("");
  const [budget, setBudget] = useState("");

  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  // 🔥 FETCH DATA
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

  // 📸 HANDLE IMAGE
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // ☁️ UPLOAD IMAGE TO CLOUDINARY
  const uploadImage = async () => {
    if (!imageFile) return alert("Select image first");

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "interior_web");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dw8batf2a/image/upload",
        formData
      );

      setImageUrl(res.data.secure_url);
      alert("Image uploaded ✅");
    } catch (err) {
      console.log(err);
      alert("Upload failed ❌");
    } finally {
      setUploading(false);
    }
  };

  // 💾 SAVE DESIGN
  const saveDesign = async () => {
    if (!imageUrl) return alert("Upload image first");

    try {
      await axios.post("http://localhost:3000/design/", {
        Title: title,
        Image: imageUrl,
        Category: category,
        Theme: theme,
        Description: desc,
        BudgetRange: budget,
      });

      alert("Design added ✅");

      // RESET
      setTitle("");
      setDesc("");
      setBudget("");
      setImageUrl("");

      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  // ❌ DELETE DESIGN
  const deleteDesign = async (id) => {
    const confirmDelete = window.confirm("Delete this design?");
    if (!confirmDelete) return;

    await axios.delete(`http://localhost:3000/design/dell/${id}`);
    fetchData();
  };

  return (
    <div className="manage-container">

      <h2>Manage Designs</h2>

      {/* 🔥 ADD FORM */}
      <div className="form-section">

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option>LivingRoom</option>
          <option>Kitchen</option>
          <option>BedRoom</option>
          <option>BathRoom</option>
        </select>

        <select onChange={(e) => setTheme(e.target.value)}>
          <option>modern</option>
          <option>luxury</option>
          <option>traditional</option>
          <option>industrial</option>
        </select>

        <input
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <input
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <input type="file" onChange={handleImageChange} />

        <button onClick={uploadImage}>
          {uploading ? "Uploading..." : "Upload Image"}
        </button>

        <button onClick={saveDesign}>Add Design</button>

        {imageUrl && <img src={imageUrl} className="preview-img" />}
      </div>

      {/* 🔥 TABLE */}
      <table className="design-table">

        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Theme</th>
            <th>Budget</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item._id}>

              <td>
                <img src={item.Image} alt="" className="table-img" />
              </td>

              <td>{item.Title}</td>
              <td>{item.Category}</td>
              <td>{item.Theme}</td>
              <td>{item.BudgetRange}</td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteDesign(item._id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default ManageDesign;