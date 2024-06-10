import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(prevState => !prevState);
  };

  return (
    <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="nav-header">
        <h1 className="bytebeat-title">ByteBeat</h1>
        <button className="nav-toggle" onClick={toggleNav}>
          ☰
        </button>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-offers" activeClassName="active">
            My Offers
          </NavLink>
        </li>
        <li>
          <NavLink to="/support-feedback" activeClassName="active">
            Support & Feedback
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
