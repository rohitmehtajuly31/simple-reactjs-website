import React from 'react';
import Header from './Header';
import Footer from './footer';

const Home = () => {
  return (
    <div>
 
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensures the image covers the container without distortion
            }}
            src="https://t4.ftcdn.net/jpg/02/84/46/89/240_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg"
            alt=""
          />
        </div>
        <div style={styles.paragraphContainer}>
          <h1>Food Ordering Website</h1>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div style={styles.title}>
          <h1 style={{ padding: '5rem', inlineSize:'auto', backgroundColor:'black', color:'white', borderRadius:'10px' }}>Established Fact That a Reader Will</h1>
        </div>
      </div>
      <div style={styles.container2}>
        <div style={styles.imageContainer2}>
          <img style={styles.image} src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg" alt="" />
        </div>
        <div style={styles.imageContainer2}>
          <img style={styles.image} src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg" alt="" />
        </div>
        <div style={styles.imageContainer2}>
          <img style={styles.image} src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg" alt="" />
        </div>
      </div>
{/* new sect */}
<div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '10px' // Ensures the image covers the container without distortion
            }}
            src="https://t4.ftcdn.net/jpg/02/84/46/89/240_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg"
            alt=""
          />
        </div>
        <div style={styles.paragraphContainer}>
          <h1>Food Ordering Website</h1>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
      </div>
{/* new sect */}
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop:'10px',marginBottom:'10px', width:'100%',backgroundImage: 'url(data:image/jpeg;base64,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)',
    backgroundSize: 'cover' }}>
        <div style={styles.title}>
         <div> <h1 style={{ padding: '1rem', inlineSize:'auto' }}>Established Fact That a Reader Will</h1></div>
         <div style={{width:'70%', alignItems:'center', textAlign:'center'}}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.  </p> </div> 
        </div>
      </div>
      <Footer/>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
  },
  imageContainer: {
    backgroundColor: '##f1f1f1',
    height: '20rem',
    width: '55%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraphContainer: {
    padding: '20px',
    width: '40%',
    height: '20rem',
    backgroundColor: '#f1f1f1',
    borderRadius: '15px',
  },
  title: {
    width: '75%',
    height: '15rem',
    backgroundColor: 'd1d0d0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius:'10px'
  },
  container2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
  },
  imageContainer2: {
    width: '30%', // Adjusted width to prevent overlap
    display: 'flex',
    justifyContent: 'center', // Center images
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 'auto', // Maintain aspect ratio
    borderRadius: '15px', // Optional: add border radius to images
    objectFit: 'cover', // Ensures images fit well in their containers
  },
};

export default Home;
