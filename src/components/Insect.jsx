import React from 'react';
import beetle from '../assets/Beetle.png';
import wasp from '../assets/Wasp.png';
import ant from '../assets/Ant.png';

const insectImages = {
  Beetle: beetle,
  Wasp: wasp,
  Ant: ant,
};

// eslint-disable-next-line react/prop-types
const Insect = ({ type, onMouseDown, isSelected, style }) => {
  return (
    <img 
      src={insectImages[type]} 
      className={`insect ${isSelected ? 'selected' : ''}`} 
      alt={type} 
      onMouseDown={onMouseDown} // Handle mouse down to start dragging
      style={style} // Apply insect's position
    />
  );
};

export default Insect;
