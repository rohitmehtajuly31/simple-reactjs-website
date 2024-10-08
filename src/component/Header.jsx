import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYN_tzMtsfj1R-4-UXba49tNSE8U8lFV6ZBXkxeDiGM24Z-T8xX9nfttAXg&s" alt="" style={styles.logo} />
        </Link>
        <div style={styles.linksContainer}>
          <Link to="/services" style={styles.link}>Services</Link>
          <Link to="/integration" style={styles.link}>Integration</Link>
          <Link to="/solutions" style={styles.link}>Solutions</Link>
          <Link to="/company" style={styles.link}>Company</Link>
          <Link to="/about" style={styles.link}>About Us</Link>
        </div>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed', // Make header fixed
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', // Cream color
    color: '#333', // Dark text color for contrast
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Add shadow
    zIndex: 1000, // Ensure it stays above other content
  },
  nav: {
    display: 'flex',
    width: '100%', // Take full width
    justifyContent: 'space-between', // Align items to left and right
    alignItems: 'center', // Center items vertically
    marginTop: '10px',
  },
  linksContainer: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#333', // Dark text color for links
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
  logo: {
    width: '50px', // Set a smaller size for the logo
    height: 'auto',
  },
};

export default Header;
