import React from 'react';
import Hero from './Hero';
import { dummyData } from '../Data.js';



const HomePage = () => {
  return (
    <div className="home-page">
 <Hero></Hero>
      <main className="home-content">
        <p>This is the main section of the page.</p>
      </main>
      <footer className="home-footer">
        <p>© 2024 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
