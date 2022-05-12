import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, useHistory, Redirect } from 'react-router-dom';
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
      a
      <BrowserRouter>
      <Switch>
      <Route path='/'>
          <Home />
        </Route>
        <Route path='/Like'>
          <Like />
        </Route>
        <Route path='/Map'>
          <Map />
        </Route>
        <Route path='/Mypage'>
          <Mypage />
        </Route>
        <Route path='/Signup'>
          <Signup />
        </Route>
        <Route path='/Store'>
          <Store />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
