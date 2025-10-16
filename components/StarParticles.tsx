import React from 'react';
import Starfield from 'react-starfield';

const StarParticles = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
      <Starfield
        starCount={17000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      
    </div>
  );
};

export default StarParticles;