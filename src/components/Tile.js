import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tile.css';

const Tile = ({ imagePath }) => {
  const navigate = useNavigate();

  const handleTileClick = () => {
    navigate('/restaurants');
  };

  return (
    <div
      className="tile"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${imagePath})` }}
      onClick={handleTileClick}
    ></div>
  );
};

export default Tile;
