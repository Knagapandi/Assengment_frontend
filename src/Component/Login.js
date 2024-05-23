import React, { useState,useContext } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

const Login = () => {
    // const { login } = useContext(AuthContext);
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/login', formData);
      alert("login Successfully");
      console.log(response.data);
      localStorage.setItem("userId",JSON.stringify(response.data.user));
    //   login(response.data.user);
    if(response.data.user.role==="admin"){
        navigate('/video-player'); 
    }
    else{
        navigate('/upload-video'); 
    }


     
    } catch (error) {
        alert(error)
      console.error(error);
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <div>
        <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      </div>
      <div>
      <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
