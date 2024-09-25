import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
        <Link to="/" style={styles.link}><h3 style={styles.title}>Home</h3></Link> 
          <p style={styles.text}>
            We are dedicated to providing the best food ordering experience.
          </p>
        </div>
        <div style={styles.column}>
        <Link to="/services" style={styles.link}><h3 style={styles.title}>Services</h3></Link> 
          <ul style={styles.list}>
            <li style={styles.listItem}>Order Online</li>
            <li style={styles.listItem}>Delivery</li>
            <li style={styles.listItem}>Catering</li>
          </ul>
        </div>
        <div style={styles.column}>
        <Link to="/about" style={styles.link}><h3 style={styles.title}>About Us</h3></Link> 
          <p style={styles.text}>Email: info@example.com</p>
          <p style={styles.text}>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div style={styles.bottom}>
        <p style={styles.text}>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#4CAF50', // Change to your preferred color
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px 0',
  },
  column: {
    flex: 1,
    padding: '0 20px',
  },
  title: {
    margin: '0 0 10px',
    fontSize: '1.5rem',
  },
  text: {
    margin: '0 0 10px',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    margin: '5px 0',
  },
  bottom: {
    marginTop: '20px',
    borderTop: '1px solid #fff',
    padding: '10px 0',
  },
};

export default Footer;
