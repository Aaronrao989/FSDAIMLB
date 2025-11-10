import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Import your page components (make sure these files exist in src/component/)
import Login from "./component/login";
import Register from "./component/registration";
import Dashboard from "./component/dashboard";
import MainLayout from "./component/mainlayout";// optional shopping cart page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
