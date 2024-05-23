import React, { useState } from 'react';
import axios from '../api/axios';
import {useNavigate} from "react-router-dom"

const Register = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '', 
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
      const response = await axios.post('/users/register', formData);
      alert("Register Successfully");
      setFormData({name: '',
      email: '',
      password: '',
      role: '', })
      navigate('/login');
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      </div>
      <div>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      </div>
      <div>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      </div>
      <div>
      <label>
        Role:
        <input type="text" name="role" value={formData.role} onChange={handleChange} required />
      </label>
      </div>
      <div>
      <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default Register;
