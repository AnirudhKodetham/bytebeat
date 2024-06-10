import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RestaurantSelectionPage.css';

const RestaurantSelectionPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/landing');
  };

  return (
    <div className="restaurant-selection-page">
      <div className="header">
        <button onClick={handleBackClick} className="back-button">Back</button>
        <h1 className="bytebeat-title">ByteBeat</h1>
      </div>
      <h2>Please select your restaurant</h2>
      <div className="tiles-container">
        <div className="tile">
          <img src={`${process.env.PUBLIC_URL}/images/restaurant1.jpg`} alt="Restaurant 1" />
          <div className="counter">Quantity: 1</div>
        </div>
        <div className="tile">
          <img src={`${process.env.PUBLIC_URL}/images/restaurant2.jpg`} alt="Restaurant 2" />
          <div className="counter">Quantity: 2</div>
        </div>
        <div className="tile">
          <img src={`${process.env.PUBLIC_URL}/images/restaurant3.jpg`} alt="Restaurant 3" />
          <div className="counter">Quantity: 3</div>
        </div>
        <div className="tile">
          <img src={`${process.env.PUBLIC_URL}/images/restaurant4.jpg`} alt="Restaurant 4" />
          <div className="counter">Quantity: 4</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSelectionPage;
