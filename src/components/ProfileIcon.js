import React from 'react';
import './ProfileIcon.css';

const ProfileIcon = ({ username }) => {
  return (
    <div className="profile-icon">
      <span>Welcome {username}</span>
    </div>
  );
};

export default ProfileIcon;
