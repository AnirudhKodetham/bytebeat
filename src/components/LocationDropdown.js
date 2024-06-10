import React from 'react';
import './LocationDropdown.css';

const LocationDropdown = () => {
  return (
    <div className="location-dropdown">
      <i className="location-icon">📍</i>
      <select>
        <option>Home</option>
        <option>Office</option>
        <option>Beach House</option>
      </select>
    </div>
  );
};

export default LocationDropdown;
