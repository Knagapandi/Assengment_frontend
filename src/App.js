import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Signup from './Component/Signup';
import UserList from './Component/UserList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userslist" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
