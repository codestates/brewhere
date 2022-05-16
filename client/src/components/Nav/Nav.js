import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoHorizontal from './img/logo_x1_horizontal.png';
import LoginModal from '../Modal/Login/Login';
import MenuModal from '../Modal/Menu/Menu';
import './Nav.css'

export default function Nav() {
  // const [search, setSearch] = useState('')

return (
  <>
    <header>
      <nav className="navbar"> 
        <div className='nav-logo'>
          <NavLink to='/' className='nav-links'>
            <img className='nav-logo-img' src={logoHorizontal} alt='logo'></img>
          </NavLink>
        </div>
          <NavLink to='/map' className='nav-links search'>
            <div>검색</div>
            <input className='search-bar' type='text' placeholder='여기서 브루어리를 검색하세요'></input>
          </NavLink>
        
        <div className='nav-links'>
          <LoginModal />
        </div>

        <div className='nav-links'>
          <MenuModal />
        </div>
      </nav>
    </header>
  </>
  );
}