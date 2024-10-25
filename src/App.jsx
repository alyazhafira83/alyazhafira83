import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Antri from './pages/Antri';
import Navbar from './components/template/Navbar';
import Admin from './pages/Admin';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/antri" element={<Antri />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
