import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Student from './components/student.jsx';

function App() {
  return (
    <div >
      <Student name="Aaron" roll="2300321530001" branch="CSE-AIML" section="B" college="ABES ENGINEERING COLLEGE"/>
    </div>
  );
}

export default App;
