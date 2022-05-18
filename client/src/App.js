
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Map from './pages/Map'
import Mypage from './pages/Mypage'
import Store from './pages/Store'
import KakaoRedirectHandler from './components/Kakao/KakaoRedirectHandeler'
import KakaoMypage from './components/Kakao/KakaoMypage'
import './App.css';


const axios = require("axios");


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);


  // const navigate = useNavigate();
    
    const handleLogout = () => {
      axios.post('https://localhost:8080/users/signout').then((res) => {
        setUserinfo(null);
        setIsLogin(false);
      })
    };

  // useEffect(() => {
  //   isAuthenticated();
  // }, []);
  
  return (
    <div>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/map' element={<Map />} />
            <Route path='/mypage' element={<Mypage />} userinfo={userinfo} handleLogout={handleLogout} />
            <Route path='/store' element={<Store />} />
            <Route path="/oauth/callback/kakao" component={KakaoRedirectHandler} element={<KakaoMypage />} />
            <Route path="/kakao/mypage" element={<KakaoMypage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
