import React from 'react';
import './Footer.css';  // Import the CSS file for styling
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <p>&copy; 2024 Vineetha Kondepudi. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
