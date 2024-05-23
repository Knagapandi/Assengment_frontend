import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

const VideoPlayer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/videos');
        setVideos(response.data);
      } catch (error) {
        alert(error);
        console.error(error);
      }
    };

    fetchVideos();
  }, []);

  if (videos.length === 0) return <p>Loading...</p>;

  return (
    <div>
      {videos.map(video => (
        <div key={video._id}>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <video controls>
            <source src={`http://localhost:8000/api/videos/uploads/${video.uploadedBy}/${video.filePath}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default VideoPlayer;
