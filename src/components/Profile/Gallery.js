import React from 'react';
import './Gallery.css';

const Gallery = ({ photos }) => {
  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="photo-grid">
        {photos && photos.length > 0 ? (
          photos.map((photo, index) => (
            <div className="photo-item" key={index}>
              <img src={`https://reactwebsite-2.onrender.com/uploads/${photo.filename}`} alt="Uploaded" />
              
            </div>
          ))
        ) : (
          <p className="no-photos">No photos uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
