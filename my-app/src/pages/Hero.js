import React from 'react';


const Hero = ({ title, subtitle }) => {
  return (
    <div className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Hero;
