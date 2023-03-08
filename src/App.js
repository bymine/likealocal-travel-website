import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { MainPage, ReservationPage } from './pages';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Navigate to={'/main'} />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/reservation' element={<ReservationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
