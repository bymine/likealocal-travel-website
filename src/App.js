import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/NavBar';
import { MainPage, ReservationPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to={'/main'} />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
