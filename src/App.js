// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Component/Register';
import Login from './Component/Login';
import UploadVideo from './Component/UploadVideo';
import AddPlan from './Component/AddPlan';
import CreateGroup from './Component/CreateGroup';
import FavoriteGallery from './Component/FavoriteGallery';
import VideoPlayer from './Component/VideoPlayer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload-video" element={<UploadVideo />} />
        <Route path="/add-plan" element={<AddPlan />} />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="/favorite-gallery" element={<FavoriteGallery />} />
        <Route path="/video-player" element={<VideoPlayer />} />
      </Routes>
    </Router>
  );
};

export default App;
