import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Student from './components/student.jsx';

function App() {
  const students = [
    {
      name: "Aaron",
      roll: "2300321530001",
      branch: "CSE-AIML",
      section: "B",
      college: "ABES ENGINEERING COLLEGE",
      pic: "https://via.placeholder.com/150"
    },
    {
      name: "Raj",
      roll: "2300321530002",
      branch: "CSE-DS",
      section: "A",
      college: "ABES ENGINEERING COLLEGE",
      pic: "https://via.placeholder.com/150/FFB6C1"
    },
    {
      name: "Saumya",
      roll: "2300321530003",
      branch: "IT",
      section: "C",
      college: "ABES ENGINEERING COLLEGE",
      pic: "https://via.placeholder.com/150/87CEFA"
    }
  ];

  return (
    <div>
      {students.map((ele, index) => (
        <Student key={index} data={ele} />
      ))}
    </div>
  );
}

export default App;
