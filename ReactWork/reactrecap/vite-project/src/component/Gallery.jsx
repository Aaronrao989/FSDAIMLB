import React from 'react'
import ICard from './ICard.jsx'

function Gallery() {
  const students = [
    { id: "1", name: "Aaron Rao", branch: "AIML", section: "B" },
    { id: "2", name: "John Doe", branch: "CSE", section: "A" },
    { id: "3", name: "Jane Smith", branch: "ECE", section: "C" },
    { id: "4", name: "Emily Davis", branch: "ME", section: "D" }
  ];

  return (
    <div>
      <h2>Gallery</h2>
      {students.map(ele => (
        <ICard data={ele} />
      ))}
    </div>
  );
}

export default Gallery;
