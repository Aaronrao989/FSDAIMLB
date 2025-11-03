import React from 'react'

// function Student({ name, roll, branch, section, college }) {
//   return (
//     <div className="student-card">
//       {/* Optional avatar/logo */}
//       {/* <img src="/path-to-avatar.jpg" alt="Student Avatar" className="student-avatar" /> */}
//       <h1>{name}</h1>
//       <p><strong>Roll No:</strong> <span className="highlight">{roll}</span></p>
//       <p><strong>Branch:</strong> {branch}</p>
//       <p><strong>Section:</strong> {section}</p>
//       <p><strong>College:</strong> {college}</p>
//     </div>
//   );
// }
function Student({ data }) {
  return (
    <div>
     <h1>Student Info</h1>
     <img src={data.imageUrl} style={{ border: '1px solid black' }} alt="Profile" />
     <h2>Name: {data.name}</h2>
     <h2>Roll: {data.roll}</h2>
     <h2>branch: {data.branch}</h2>
     <h2>section: {data.section}</h2>
     <h2>college: {data.college}</h2>
    </div>
  );
}

export default Student;


