import React, { useState } from 'react';
import axios from 'axios';
import './UploadForm.css';
import { useRef } from 'react';

const UploadForm = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    console.log('Selected file:', selectedFile);
    setMessage('');
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append('photo', file);
    formData.append('email', localStorage.getItem('userEmail'));

    try {
      setUploading(true);
      const res = await axios.post('http://https://reactwebsite-ezug.onrender.comד/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Upload response:', res.data);
      setMessage('Upload successful!');
      setFile(null);
      onUploadSuccess(res.data.photo);
    } catch (err) {
      console.error(err);
      setMessage('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <form className="upload-form" onSubmit={handleUpload}>
      <div className="upload-controls">
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
          className="upload-button"
        >
          Choose File
        </button>
        <button
          type="submit"
          disabled={uploading}
          className="upload-button"
        >
          {uploading ? 'Uploading...' : 'Upload Photo'}
        </button>
      </div>
      {message && <p>{message}</p>}
    </form>

  );
};

export default UploadForm;
