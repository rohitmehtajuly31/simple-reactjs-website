import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <div style={styles.linksContainer}>
          <Link to="/services" style={styles.link}>Services</Link>
          <Link to="/integration" style={styles.link}>Integration</Link>
          <Link to="/solutions" style={styles.link}>Solutions</Link>
          <Link to="/company" style={styles.link}>Company</Link>
          <Link to="/about" style={styles.link}>About Us</Link>
        </div>
        <div style={styles.socialMedia}>
          <a href="https://facebook.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Cream color
    color: '#000', // Black text
    padding: '20px',
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)', // Shadow effect
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
  },
  linksContainer: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#000',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
  socialMedia: {
    display: 'flex',
    gap: '15px',
  },
  icon: {
    color: '#000',
    fontSize: '1.5rem',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
};

export default Footer;
