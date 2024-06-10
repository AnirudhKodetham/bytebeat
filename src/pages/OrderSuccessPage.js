import React from 'react';
import './OrderSuccessPage.css';

const OrderSuccessPage = () => {
  return (
    <div className="order-success-page">
      <h1>Order Successful!</h1>
      <p>Your order ID is: 123456</p>
      <p>Your order will be delivered within 30 minutes.</p>
      <p>Your reward points have been credited.</p>
    </div>
  );
};

export default OrderSuccessPage;
