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

        {/* <div className='search'>
          <input className='search-bar' type='text' placeholder='여기서 브루어리를 검색하세요'></input>
          <NavLink to='/map' className='nav-links search-button'>검색</NavLink>
           //TODO: 검색 버튼 대신에 fontawesome을 이용해서 돋보기 이미지 넣기 
          
        </div> */}
         
        
        <div className='nav-button'>
          <div className='nav-links login'>
            <LoginModal></LoginModal>
          </div>
          <div className='nav-links menu'>
            <MenuModal />
            {/* //TODO: 메뉴 버튼 대신에 fontawesome을 이용해서 햄버거바 이미지 넣기 */}
          </div>
        </div>
      </nav>
    </header>
  </>
  );
}