import React, { useState } from 'react';
import axios from 'axios';
import './UploadProfilePic.css'
import { useRef } from 'react';

const UploadProfilePic = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
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
      const res = await axios.post('http://localhost:5000/upload_profile_pic', formData, {
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
    <form className="upload-profile-form" onSubmit={handleUpload}>
    <div className="upload-profile-controls">
      <input
        ref={fileInputRef}
        id="fileInput"
        name="photo"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <button
        type="button"
        onClick={() => fileInputRef.current.click()} // Trigger file input click
        className="upload-profile-button"
      >
        Choose File
      </button>
      <button
        type="submit"
        disabled={uploading}
        className="upload-profile-photo-button"
      >
        {uploading ? 'Uploading...' : 'Upload Photo'}
      </button>
    </div>
    {message && <p>{message}</p>}
  </form>
  );
};

export default UploadProfilePic;