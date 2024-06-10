import React from 'react';
import Tile from '../components/Tile';

const LandingPage = () => {
  return (
    <div>
      <h2>Landing Page</h2>
      <div className="tiles">
        <div className="tile"><img src="image1.jpg" alt="Tile 1" /></div>
        <div className="tile"><img src="image2.jpg" alt="Tile 2" /></div>
        <div className="tile"><img src="image3.jpg" alt="Tile 3" /></div>
        <div className="tile"><img src="image4.jpg" alt="Tile 4" /></div>
        <div className="tile"><img src="image5.jpg" alt="Tile 5" /></div>
        <div className="tile"><img src="image6.jpg" alt="Tile 6" /></div>
      </div>
    </div>
  );
};

export default LandingPage;
