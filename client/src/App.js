import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import Home from './pages/Home'
import Like from './pages/Like'
import Map from './pages/Map'
import Mypage from './pages/Mypage'
import Signup from './pages/Signup'
import Store from './pages/Store'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>
        <Route path='/Like' element={<Like />}>
        </Route>
        <Route path='/Map' element={<Map />}>
        </Route>
        <Route path='/Mypage' element={<Mypage />}>
        </Route>
        <Route path='/Signup' element={<Signup />}>
        </Route>
        <Route path='/Store' element={<Store />}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
