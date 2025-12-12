import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//change
// Import your page components
import Login from "./component/Login";
import Register from "./component/Registration";
import Dashboard from "./component/Dashboard";
import MainLayout from "./component/MainLayout";

function App() {
  const [logData, setLogData] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login loginData={logData} />} />
          <Route path="/register" element={<Register regData={setLogData} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>

      <h2>{JSON.stringify(logData)}</h2>
    </>
  );
}

export default App;
