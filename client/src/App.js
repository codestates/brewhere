<<<<<<< HEAD
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

=======
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Mypage from "./pages/Mypage";
import Store from "./pages/Store";
import KakaoRedirectHandler from "./components/Kakao/KakaoRedirectHandeler";
import KakaoMypage from "./components/Kakao/KakaoMypage";
import "./App.css";
>>>>>>> fc64cb463d4b358aa5bd68bbced3d7d30d901e22

const axios = require("axios");

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);

<<<<<<< HEAD
=======
  // const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post(
        "http://ec2-43-200-8-0.ap-northeast-2.compute.amazonaws.com/users/signout"
      )
      .then((res) => {
        setUserinfo(null);
        setIsLogin(false);
      });
  };

  // useEffect(() => {
  //   isAuthenticated();
  // }, []);

>>>>>>> fc64cb463d4b358aa5bd68bbced3d7d30d901e22
  return (
    <div>
      <BrowserRouter>
        <Nav />
<<<<<<< HEAD
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/map' element={<Map />} />
            <Route path='/mypage/mypage' element={<Mypage />} userinfo={userinfo} />
            <Route path="/oauth/callback/kakao" component={KakaoRedirectHandler} element={<KakaoMypage />} />
            <Route path="/kakao/mypage" element={<KakaoMypage />} />
            <Route element={LoginModal} />
          </Routes>
=======
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route
            path="/mypage/mypage"
            element={<Mypage />}
            userinfo={userinfo}
            handleLogout={handleLogout}
          />
          <Route path="/store" element={<Store />} />
          <Route
            path="/oauth/callback/kakao"
            component={KakaoRedirectHandler}
            element={<KakaoMypage />}
          />
          <Route path="/kakao/mypage" element={<KakaoMypage />} />
        </Routes>
>>>>>>> fc64cb463d4b358aa5bd68bbced3d7d30d901e22
      </BrowserRouter>
    </div>
  );
}

export default App;
