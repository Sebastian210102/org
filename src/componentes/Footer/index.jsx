import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: 'url(/img/footer.png)' }}>
      <div className="footer__content">
        <div className="footer__logo">
          <img src="/img/logo.png" alt="Logo" />
        </div>
        <div className="footer__social-media">
          <a href="#" className="footer__social-media-link">
            <img src="/img/instagram.png" alt="Instagram" />
          </a>
          <a href="#" className="footer__social-media-link">
            <img src="/img/twitter.png" alt="Twitter" />
          </a>
        </div>
        <div className="footer__text">
          Desarrollado por Sebastián Rabadán
        </div>
      </div>
    </footer>
  );
};

export default Footer;