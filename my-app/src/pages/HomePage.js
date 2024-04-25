// Import React and the CSS module
import React from 'react';
import styles from './Home.module.css'; // Import CSS module
import heroImage from '../images/bghero.jpeg';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const heroStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height:'100vh'
  };

  return (
    <div className={styles.homePage}>
      <div className="hero" style={heroStyle}>
        <SearchBar></SearchBar>
        </div>  
      <div className={styles.block}>
        <div className={styles.content + " " + styles.horizontal}></div>
        <div className={styles.content + " " + styles.horizontal}></div>
      </div>
      <div className={styles.block}>
        <div className={styles.content + " " + styles.vertical}></div>
      </div>
      <div className={styles.block}>
        <div className={styles.content + " " + styles.horizontal}></div>
        <div className={styles.content + " " + styles.vertical}></div>
      </div>
      <div className={styles.block}>
        <div className={styles.content + " " + styles.horizontal}></div>
        <div className={styles.content + " " + styles.horizontal}></div>
        <div className={styles.content + " " + styles.vertical}></div>
      </div>
    </div>
  );
};

export default HomePage;
