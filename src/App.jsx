import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
//import pages
import InventoryPage from './pages/inventory/Inventory.page.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<InventoryPage />}/>
      </Routes>
    </Router>
  )
}

export default App;
