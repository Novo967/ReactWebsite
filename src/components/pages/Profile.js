import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileHeader from '../Profile/ProfileHeader';
import FollowersInfo from '../Profile/FollowersInfo';
import UploadPhoto from '../Profile/UploadPhoto';
import './Profile.css';
import Gallery from '../Profile/Gallery';
import UploadForm from '../Profile/UploadForm';
import UploadProfilePic from '../Profile/UploadProfilePic';

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const email = localStorage.getItem('userEmail');
      try {
        
       
        if (!email) {
          console.error("Email not found in localStorage");
          return;
        }
        const response = await axios.get(`http://https://reactwebsite-ezug.onrender.com/profile?email=${email}`);
        
        setProfile(response.data);
      } catch (error) {
        console.error("Error loading profile:", error);
      }

    };

    

    fetchProfile();
  }, []);

  if (!profile) return <div className="loading">Profile loading...</div>;

  return (
    <div className="profile-container">
      
      {profile?.profile_pic && (
        <div className="profile-picture">
          <img
            src={`http://192.168.1.116:5000/uploads/${profile.profile_pic}`}
            alt="Profile"
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
          />
        </div>
      )}
      <ProfileHeader name={profile.name} />
      <UploadProfilePic onUploadSuccess={(newFilename) => {
        setProfile((prev) => ({
          ...prev,
          profile_pic: newFilename,
        }));
      }} />
      
     
      <FollowersInfo followers={profile.followers} following={profile.following} />
      <UploadPhoto />

      {/* ✅ Upload form goes here */}
      <UploadForm
          email={profile.email}
          onUploadSuccess={(newPhoto) =>
            setProfile((prev) => ({
              ...prev,
              photos: [...(prev.photos || []), newPhoto],
            }))
          }
        />

      <Gallery
        photos={profile?.photos || []}
        email={profile?.email}
        onUploadSuccess={(newPhoto) =>
          setProfile((prev) => ({
            ...prev,
            photos: [...(prev.photos || []), newPhoto],
          }))
        }
      />
    </div>
  );
}

export default Profile;
