import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import Map from './pages/Map';
import Mypage from './pages/Mypage';
import LoginModal from './components/Modal/Login/Login';
import Kakao from './components/Kakao/KakaoAuth';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/map' element={<Map />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='oauth/callback/kakao' element={<Kakao />} />
          <Route element={LoginModal} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
