import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <span className="divider"></span>
      <p className="faq-text">Have more questions?</p>
      <button className="faq-button">Checkout Our FAQ's</button>
      <span className="divider"></span>
      <div className="signature">
        <h4>Falguni Shah</h4>
      </div>
    </footer>
  );
}

export default Footer;
