import React from 'react';
import Header from './Header';
import Footer from './footer';

const About = () => {
  return (
    <div>
      
      <div style={styles.container}>
        <div style={styles.box}>
          <div style={styles.inbox1}>
            <h1>About Us</h1>
            <p>
              Welcome to our website! We are dedicated to providing you with the best food ordering experience.
              Our mission is to connect you with a wide variety of delicious options at your fingertips.
            </p>
            <button style={styles.button}>Contact Us</button>
          </div>
          <div style={styles.inbox2}>
          <img style={{ maxWidth: '-webkit-fill-available' }} src="https://thumbs.dreamstime.com/b/us-businessman-working-modern-technology-73677146.jpg" alt="" />

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    height: '100vh', // Full height
    backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1701534008693-0eee0632d47a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D)',
    backgroundSize: 'cover', // Cover the entire container
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    display: 'flex',
    flexDirection: 'row', // Change to 'column' if you want vertical layout
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for better readability
    borderRadius: '10px',
    padding: '20px',
    width: '80%', // Adjust as necessary
  },
  inbox1: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    width: '50%',
  },
  inbox2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
  },
  image1: {
    maxWidth: '100%',
    borderRadius: '10px',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50', // Green background
    color: '#fff', // White text
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default About;
