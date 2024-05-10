import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './router/routes'; // Changed the import statement to import AppRoutes
import Menu from './Header/Menu';

function App() {
  return (
    <>
    
      <Router>
        <Menu /> {/* Using Menu instead of Header */}
        <AppRoutes /> {/* Using AppRoutes instead of Routes */}
      </Router>
    </>
  );
}

export default App;
