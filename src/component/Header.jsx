import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My Website</h1>
      <nav style={styles.nav}>
      
      <Link to="/" style={styles.link}>Home</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/about" style={styles.link}>About Us</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Green background
    color: '#fff', // White text
    padding: '20px',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
  },
  nav: {
    display: 'flex',
    gap: '15px',
    marginTop: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
};

export default Header;
