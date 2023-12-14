import React from 'react';
import './App.css'

import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';


import Home from './component/pages/Home'
import About from './component/pages/About'
import Services from './component/pages/Services'
import Contact from './component/pages/Contact' 


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;