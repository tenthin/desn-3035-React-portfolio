// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div className="container">
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/assets/logo.png" alt="Logo" />
        </div>
        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.github.com" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Tenzin Thinley. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
