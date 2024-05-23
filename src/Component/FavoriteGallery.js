import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

const FavoriteGallery = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const userID = JSON.parse(localStorage.getItem("userId"));
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`/favorites/${userID._id}`); 
        setFavorites(response.data);
      } catch (error) {
        alert(error);
        console.error(error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h2>Favorite Gallery</h2>
      <div className="gallery">
        {favorites.map((favorite) => (
          <div key={favorite._id} className="favorite-item">
            <h3>{favorite.title}</h3>
            <p>{favorite.description}</p>
            <video controls src={`http://localhost:8000/${favorite.filePath}`}></video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteGallery;
