import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import Home from './pages/Home'
import Like from './pages/Like'
import Map from './pages/Map'
import Mypage from './pages/Mypage'
import Signup from './pages/Signup'
import Store from './pages/Store'
import KakaoRedirectHandler from './components/Kakao/KakaoRedirectHandeler'
import KakaoMypage from './components/Kakao/KakaoMypage'
import './App.css';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/like' element={<Like />} />
            <Route path='/map' element={<Map />} />
            <Route path='/mypage' element={<Mypage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/store' element={<Store />} />
            <Route path="/oauth/callback/kakao" component={KakaoRedirectHandler} element={<KakaoMypage />} />
            <Route path="/kakao/mypage" element={<KakaoMypage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
