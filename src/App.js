import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Unete from './pages/Unete';
import Politicas from './pages/Politicas';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Unete />} />
      <Route path="Unete" element={<Unete />} />
      <Route index element={<Unete />} />
      <Route path="Politicas-y-privacidad" element={<Politicas />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
