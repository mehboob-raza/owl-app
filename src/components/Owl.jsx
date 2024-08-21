import React from 'react';
import owl from '../assets/owl.png';

// eslint-disable-next-line react/prop-types
const Owl = ({ mouseX, mouseY }) => {
  const owlX = window.innerWidth / 2;
  const owlY = window.innerHeight / 2;

  const angle = Math.atan2(mouseY - owlY, mouseX - owlX);
  const eyeX = Math.cos(angle) * 20; // Distance of eye movement
  const eyeY = Math.sin(angle) * 20;

  return (
    <div className="owl-container">
      <img src={owl} className="owl-img" alt="Owl" />
      <div className="eye left-eye" style={{ transform: `translate(${eyeX}px, ${eyeY}px)` }}>
        <div className="pupil"></div>
      </div>
      <div className="eye right-eye" style={{ transform: `translate(${eyeX}px, ${eyeY}px)` }}>
        <div className="pupil"></div>
      </div>
    </div>
  );
};

export default Owl;
