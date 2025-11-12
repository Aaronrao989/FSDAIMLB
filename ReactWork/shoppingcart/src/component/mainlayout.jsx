import React from 'react';
import { Link } from 'react-router-dom';  // ✅ Import Link

function MainLayout() {   // ✅ Capitalize component name
  return (
    <div>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
}

export default MainLayout;
