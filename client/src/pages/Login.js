import React, { useState } from "react";
import logo from "../components/Landing/img/logo_x05_square.png";
import styled from "styled-components";
import SignupModal from "../components/Modal/Signup/Signup";

import "./Login.css";

const axios = require("axios");

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
  z-index: 999; // 레이어의 맨 위에 모달 창이 나와야 하므로 가장 큰 수(999)로 설정
`;

export const ModalBtn = styled.button`
  text-decoration: none;
  border: none;
  padding: 20px;
  color: black;
  cursor: grab;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
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

function Login() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };


  const openModalHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  // 카카오 로그인 관련
  const CLIENT_ID = "a879c6361070a85ff535c43fddfd2bba";
  const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const onClickSubmit = () => {
    const { email, password } = loginInfo;
    if (!email || !password) {
      setErrorMessage('이메일과 비밀번호를 확인하세요')
      return;
    }
    axios.post(
      "http://localhost:8080/users/signin",
      { email, password },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res)
        const { accessToken } = res.data;
        axios.default.headers.common['Authorization'] = `Bearer ${accessToken}`;

        // handleResponseSuccess()
      })
  }

  return (
    <>
      <ModalContainer onClick={openModalHandler}>
        <ModalBtn onClick={openModalHandler}>로그인</ModalBtn>

        {modalIsOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <div className="close-btn" onClick={openModalHandler}>
                &times;
              </div>

              <div className="desc">
                <img src={logo} alt="logo" className="modal-login-logo" />
              </div>
              <div className="desc input-title">이메일</div>
              <input
                type="text"
                className="input-login"
                placeholder="example@kakao.com"
                onChange={handleInputValue('email')}
              />
              <div className="desc input-title">비밀번호</div>
              <input
                type="password"
                className="input-login"
                placeholder="비밀번호를 입력해주세요"
                onChange={handleInputValue('password')}
              />
              <div>{errorMessage}</div>
              <button
                className="desc login-btn"
                onClick={onClickSubmit}
              >
                로그인
              </button>
              <a href={KAKAO_AUTH_URL}>
                <div className="kakao_btn"></div>
              </a>
              <br />
              <div className="signup-text">
                아이디가 없으신가요 ?
                <span className="signup-link">
                  <SignupModal />
                </span>
              </div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
}

export default Login;
