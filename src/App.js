import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import MyOffers from './pages/MyOffers';
import SupportFeedback from './pages/SupportFeedback';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/my-offers" element={<MyOffers />} />
            <Route path="/support-feedback" element={<SupportFeedback />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
