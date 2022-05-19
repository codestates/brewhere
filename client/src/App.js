import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import Home from './pages/Home'
import Map from './pages/Map'
import Mypage from './pages/Mypage'
import KakaoRedirectHandler from './components/Kakao/KakaoRedirectHandeler'
import KakaoMypage from './components/Kakao/KakaoMypage'
import LoginModal from "./components/Modal/Login/Login";
import './App.css';


const axios = require("axios");


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/map' element={<Map />} />
            <Route path='/mypage/mypage' element={<Mypage />} userinfo={userinfo} />
            <Route path="/oauth/callback/kakao" component={KakaoRedirectHandler} element={<KakaoMypage />} />
            <Route path="/kakao/mypage" element={<KakaoMypage />} />
            <Route element={LoginModal} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
