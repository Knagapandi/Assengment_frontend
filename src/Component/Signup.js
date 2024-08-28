import React, { useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const { Option } = Select;

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post('/signup', values);
      message.success('User registered successfully');
      navigate('/');
    } catch (error) {
      message.error('Signup failed');
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Sign Up</h2>
      <Form name="signup" onFinish={onFinish} layout="vertical">
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'Please input your first name!' }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Please input your last name!' }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          label="Mobile"
          name="mobile"
          rules={[{ required: true, message: 'Please input your mobile number!' }]}
        >
          <Input placeholder="Mobile" />
        </Form.Item>
        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: 'Please select your role!' }]}
        >
          <Select placeholder="Select a role">
            <Option value="User">User</Option>
            <Option value="Admin">Admin</Option>
            <Option value="Guest">Guest</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
