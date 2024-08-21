import React, { useState } from 'react';
import Owl from './components/Owl';
import Insect from './components/Insect';
import InsectSelector from './components/InsectSelector';
import './App.css';

const App = () => {
  const [insects, setInsects] = useState([]);
  const [selectedInsectId, setSelectedInsectId] = useState(null);
  const [isDragging, setIsDragging] = useState(false); // Track dragging state

  const addInsect = (type) => {
    const newInsect = { id: Date.now(), type, x: 0, y: 0 }; // Initialize x and y
    setInsects([newInsect]); // Allow only one insect at a time
    setSelectedInsectId(newInsect.id);
  };

  const handleMouseDown = (id, x, y) => {
    setIsDragging(true); // Start dragging
    setSelectedInsectId(id); // Ensure the correct insect is selected
  };

  const handleMouseMove = (event) => {
    if (isDragging && selectedInsectId) {
      const insectWidth = 50; // Insect width
      const insectHeight = 50; // Insect height

      // Calculate new position based on mouse coordinates
      const newX = Math.max(0, Math.min(event.clientX - insectWidth / 2, window.innerWidth - insectWidth));
      const newY = Math.max(0, Math.min(event.clientY - insectHeight / 2, window.innerHeight - insectHeight));

      // Update insect position
      setInsects((prevInsects) =>
        prevInsects.map((insect) =>
          insect.id === selectedInsectId ? { ...insect, x: newX, y: newY } : insect
        )
      );
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false); // Stop dragging
  };

  // Get the position of the currently dragged insect
  const currentInsect = insects.find(insect => insect.id === selectedInsectId);
  const mouseX = currentInsect ? currentInsect.x : 0;
  const mouseY = currentInsect ? currentInsect.y : 0;

  return (
    <div className="app" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <InsectSelector addInsect={addInsect} />
      <Owl mouseX={mouseX} mouseY={mouseY} />
      {insects.map((insect) => (
        <Insect 
          key={insect.id} 
          type={insect.type} 
          isSelected={insect.id === selectedInsectId} 
          onMouseDown={() => handleMouseDown(insect.id, insect.x, insect.y)} 
          style={{ left: insect.x, top: insect.y }} // Apply insect's position
        />
      ))}
    </div>
  );
};

export default App;
