import React from 'react';
import { Link } from 'react-router-dom';  // ✅ Import Link

function MainLayout() {   // ✅ Capitalize component name
  return (
    <div
      style={{
        marginLeft: '500px',
        marginTop: '200px',
        border: '2px solid red',
        backgroundColor: 'white',
        height: '300px',
        width: '300px'   // ✅ must be a valid color
      }}
    >
      <nav>
        <Link style={{marginLeft:'30px',color:'black', fontsize:'30px'}} to="/login">Login</Link>
        <Link style={{marginLeft:'50px',color:'black', fontsize:'30px'}}to="/register">Register</Link>
      </nav>
    </div>
  );
}

export default MainLayout;
