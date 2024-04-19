import React from 'react';
import './Home.css'; // Ensure this CSS file is correctly linked

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="block hero"></div>  // Hero block for introduction
      <div className="block">
        <div className="content white-block horizontal"></div>
        <div className="content white-block horizontal"></div>
      </div>
      <div className="block">
        <div className="content white-block vertical"></div>
      </div>
      <div className="block">
        <div className="content white-block horizontal"></div>
        <div className="content white-block vertical"></div>
      </div>
      <div className="block">
        <div className="content white-block horizontal"></div>
        <div className="content white-block horizontal"></div>
        <div className="content white-block vertical"></div>
      </div>
    </div>
  );
};

export default HomePage;
