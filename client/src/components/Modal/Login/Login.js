import React, { useState } from 'react';
import logo from '../../Landing/img/logo_x05_square.png';
import styled from 'styled-components';
import SignupModal from '../Signup/Signup';
import ConfirmModal from '../ConfirmModal';

import './Login.css';

const axios = require('axios');

export const ModalContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

export const ModalBtn = styled.button`
  text-decoration: none;
  border: none;
  padding: 20px;
  color: black;
  cursor: pointer;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 35rem;
  height: 40rem;
  border-radius: 1rem;
  position: relative;
`;

function Login({ setUserinfo }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loginConfirmOpen, setLoginConfirmOpen] = useState(false);
  const [logoutConfirmOpen, setLogoutConfirmOpen] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    userEmail: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const isAuthenticated = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/auth`, {
        withCredentials: true,
      })
      .then((res) => {});
  };

  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const openModalHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const kakaoLoginHandler = (e) => {
    e.preventDefault();
    window.location.assign(
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`
    );
  };
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  const onClickSubmit = () => {
    const { userEmail, password } = loginInfo;
    if (!userEmail || !password) {
      setErrorMessage('이메일과 비밀번호를 확인하세요');
      return;
    }
    axios
      .post(
        'http://localhost:8080/users/login',
        { userEmail, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.data.accessToken) {
          localStorage.setItem('user', res.data.data.accessToken);
        }
        handleResponseSuccess();
        setLoginConfirmOpen(true);
      });
  };

  const handleLogout = () => {
    axios
      .get(`http://localhost:8080/users/logout`)
      .then((res) => {
        setLogoutConfirmOpen(true);
        localStorage.clear();
      })
      .catch((err) => {
        alert('잘못된 요청입니다');
        console.log(err);
      });
  };

  return (
    <>
      {localStorage.getItem('user') ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <ModalBtn onClick={openModalHandler}>로그인</ModalBtn>
      )}

      {modalIsOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <div className='close-btn' onClick={openModalHandler}>
              &times;
            </div>

            <div className='desc'>
              <img src={logo} alt='logo' className='modal-login-logo' />
            </div>
            <div className='desc input-title'>이메일</div>
            <input
              type='text'
              className='input-login'
              placeholder='example@kakao.com'
              onChange={handleInputValue('userEmail')}
            />
            <div className='desc input-title'>비밀번호</div>
            <input
              type='password'
              className='input-login'
              placeholder='비밀번호를 입력해주세요'
              onChange={handleInputValue('password')}
            />
            <div>{errorMessage}</div>
            <button
              className='desc login-btn'
              type='submit'
              onClick={onClickSubmit}
            >
              로그인
            </button>
            <div className='kakao_btn' onClick={kakaoLoginHandler}></div>
            <br />
            <div className='signup-text'>
              아이디가 없으신가요 ?
              <span className='signup-link'>
                <SignupModal />
              </span>
            </div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
      {loginConfirmOpen ? (
        <ConfirmModal>로그인 되었습니다!</ConfirmModal>
      ) : null}
      {logoutConfirmOpen ? (
        <ConfirmModal>로그아웃 되었습니다!</ConfirmModal>
      ) : null}
    </>
  );
}

export default Login;
