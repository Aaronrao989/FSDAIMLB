import React from 'react'

function Student({ name, roll, branch, section, college }) {
  return (
    <div className="student-card">
      {/* Optional avatar/logo */}
      {/* <img src="/path-to-avatar.jpg" alt="Student Avatar" className="student-avatar" /> */}
      <h1>{name}</h1>
      <p><strong>Roll No:</strong> <span className="highlight">{roll}</span></p>
      <p><strong>Branch:</strong> {branch}</p>
      <p><strong>Section:</strong> {section}</p>
      <p><strong>College:</strong> {college}</p>
    </div>
  );
}

export default Student;


