import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const AddPlan = () => {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    duration: '',
    details: '',
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
      const response = await axios.post('/admin/add-plan', formData);
      
      navigate('/video-player');
      console.log(response.data);
    } catch (error) {
        alert(error)
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Plan</h2>
      <label>
        Plan Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />
      </label>
      <label>
        Duration (in days):
        <input type="number" name="duration" value={formData.duration} onChange={handleChange} required />
      </label>
      <label>
        Details:
        <textarea name="details" value={formData.details} onChange={handleChange} required />
      </label>
      <button type="submit">Add Plan</button>
    </form>
  );
};

export default AddPlan;
