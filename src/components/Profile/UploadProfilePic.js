import React, { useState } from 'react';
import axios from 'axios';
import './UploadProfilePic.css'
const UploadProfilePic = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [uploading, setUploading] = useState(false);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage('');
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append('photo', file);
    formData.append('email', localStorage.getItem('userEmail'));

    try {
      const res = await axios.post('http://192.168.15.51:5000/upload_profile_pic', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Upload response:', res.data);
      
      setFile(null);
      onUploadSuccess(res.data.filename); // Refresh profile image
    } catch (err) {
      console.error(err);
      setMessage('Upload failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleUpload} className="upload-profile-form">
      <div className="upload-profile-controls">
            <label htmlFor="fileInput" className="upload-profile-photo-button">Choose File</label>
            <input
            id="fileInput"
            
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            />
            <button type="submit" disabled={uploading} className="upload-profile-button">
            {uploading ? 'Uploading...' : 'Upload Photo'}
            </button>
        </div>
      {message && <p>{message}</p>}
    </form>
  );
};

export default UploadProfilePic;
