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
const InsectSelector = ({ addInsect }) => {
  return (
    <div className="insect-selector">
      {Object.keys(insectImages).map((type) => (
        <button key={type} onClick={() => addInsect(type)}>
          <img src={insectImages[type]} alt={type} className="selector-img" />
          {type}
        </button>
      ))}
    </div>
  );
};

export default InsectSelector;
