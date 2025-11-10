import React, { useState } from 'react';
import raj from './raj.jpg'; // Image is in the same folder as this component

function ImageManipulation() {
  // State variables for image & background dimensions
  const [size, setSize] = useState(200); // single state for both height & width

  // State variables for background color
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // Function to increase both height & width together
  function increaseSize() {
    setSize(size + 20);
  }

  // Function to change background color randomly
  function changeBgColor() {
    setRed(Math.floor(Math.random() * 255));
    setGreen(Math.floor(Math.random() * 255));
    setBlue(Math.floor(Math.random() * 255));
  }

  return (
    <div style={{ border: '2px solid black', width: '450px', padding: '10px' }}>
      <h3>Image Manipulation</h3>

      {/* Image Display with dynamic background color and synced size */}
      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          height: `${size + 40}px`, // background grows with image
          width: `${size + 40}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}
      >
        <img
          src={raj}
          alt="Sample"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transition: 'all 0.3s ease',
          }}
        />
      </div>

      {/* Buttons */}
      <div style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={increaseSize}>Increase Size</button>
        <button onClick={changeBgColor}>Change Background Color</button>
      </div>

      {/* Show current RGB value */}
      <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
        Current Background: rgb({red}, {green}, {blue})
      </div>
    </div>
  );
}

export default ImageManipulation;
