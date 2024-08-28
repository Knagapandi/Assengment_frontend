import React, { useEffect, useState } from 'react';
import { Table, Input, Select, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const { Option } = Select;
const { Search } = Input;

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/userslist', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setUsers(res.data);
      } catch (error) {
        message.error('Failed to fetch userslist');
      }
    };
    fetchUsers();
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');  
    message.success('Logged out successfully');
    navigate('/'); 
  };

  const filteredUsers = users
    .filter(user => user.firstName.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()))
    .filter(user => (roleFilter ? user.role === roleFilter : true));

  const columns = [
    { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Search
          placeholder="Search by name or email"
          onSearch={value => setSearch(value)}
          style={{ width: 300 }}
        />
        <Select
          placeholder="Filter by role"
          onChange={(value) => setRoleFilter(value)}
          style={{ width: 200 }}
        >
          <Option value="">All Roles</Option>
          <Option value="User">User</Option>
          <Option value="Admin">Admin</Option>
          <Option value="Guest">Guest</Option>
        </Select>
        <Button type="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <Table dataSource={filteredUsers} columns={columns} rowKey="_id" />
    </div>
  );
};

export default UserList;
