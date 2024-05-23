import React, { useState,useContext,useEffect } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

const UploadVideo = () => {
    // const { user } = useContext(AuthContext);
    const navigate=useNavigate();
   const[user_id,setuser_id]=useState("");
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    file: null,
    uploadedBy: '', 
  });


  useEffect(()=>{
    const userID = JSON.parse(localStorage.getItem("userId"));
    setuser_id(userID._id)
    // console.log("User ID:", userID);
  },[])

  const handleChange = (e) => {
    if (e.target.name === 'file') {
      setFormData({
        ...formData,
        file: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('category', formData.category);
    data.append('uploadedBy', user_id);
    data.append('filePath', formData.file);

    try {
      const response = await axios.post('/admin/upload-video', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/video-player');
      console.log(response.data);
  
    } catch (error) {
        alert(error);
      console.error(error);
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Video</h2>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={formData.category} onChange={handleChange} required />
      </label>
      <label>
        Video File:
        <input type="file" name="file" accept="video/*" onChange={handleChange} required />
      </label>
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadVideo;
