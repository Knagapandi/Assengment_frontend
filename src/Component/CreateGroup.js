import React, { useState } from 'react';
import axios from '../api/axios';
// import { useNavigate } from 'react-router-dom';

const CreateGroup = () => {
    // const navigate=useNavigate();
  const [formData, setFormData] = useState({
    groupName: '',
    members: '',
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
      const response = await axios.post('/groups/create', formData);
      console.log(response.data);
    //   navigate('/add-plan');
    } catch (error) {
        alert(error);
      console.error(error);
     
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Group</h2>
      <label>
        Group Name:
        <input type="text" name="groupName" value={formData.groupName} onChange={handleChange} required />
      </label>
      <label>
        Members (comma separated emails):
        <input type="text" name="members" value={formData.members} onChange={handleChange} required />
      </label>
      <button type="submit">Create Group</button>
    </form>
  );
};

export default CreateGroup;
