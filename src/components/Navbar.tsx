import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/Corinthians.png';  // Add this import at the top

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img 
          src={logo}
          alt="Colosseum Blockchain Summit"
          className="event-logo"
        />

        <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
          <li>
            <a href="/">Home</a>
          </li>
          {/* <li>
            <a href="/about">About</a>
          </li> */}
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/EventCard">Card</a>
          </li>
        </ul>
      </div>
      
      <div className="navbar-buttons">
        <a href="/EventEmbed" className="ticket-button">Ticket</a>
        <a href="/sponsor" className="sponsor-button">Sponsor</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;