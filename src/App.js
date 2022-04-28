import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Like from './Components/Like';

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Like" element={<Like />}></Route>
      </Routes>
    </Router>
  );
}
