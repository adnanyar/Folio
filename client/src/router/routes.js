import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Changed the import statement to import only Routes and Route
import Home from '../Home/Home';
import About from '../About/About';

const AppRoutes = () => { // Renamed the component to AppRoutes
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<div className='d-flex justify-content-center align-items-center'><h3>404</h3></div>} />
    </Routes>
  );
}

export default AppRoutes;  
