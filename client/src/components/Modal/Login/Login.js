import React, { useState } from 'react';
import Modal from 'react-modal';
import logo from '../../Landing/img/logo_x05_square.png'
import './Login.css'

Modal.setAppElement('#root')


function Login () {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // 모달 창이 열렸을 때, 스크롤 막기
  if (modalIsOpen) {
    document.body.style.overflow = "hidden";
  } else { document.body.style.overflow = "unset" }
  // 카카오 로그인 관련
  const CLIENT_ID = 'a879c6361070a85ff535c43fddfd2bba';
  const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao'
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <button onClick={()=> setModalIsOpen(!modalIsOpen)}>로그인</button>
        <div className="modal-login" >
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >
            {/* 
            이메일, 비밀번호로 로그인 - DB와 매치
            카카오 Oauth 로그인 
            회원가입 페이지 링크
            */}
            <img className="modal-login-logo" src={ logo } alt='logo' />
            <button onClick={()=> setModalIsOpen(!modalIsOpen)} className="close-btn">X</button>
            <div className="login-area">
              <div>이메일</div>
              <input className="input-login" type="text" placeholder="example@example.com" />
              <div>비밀번호</div>
              <input className="input-login" type="text" placeholder="8자 이상의 영문, 숫자를 입력해주세요" />
              <br />
            <button>로그인</button>
              <a href={KAKAO_AUTH_URL}>
                <div className='kakao_btn' />
              </a>
            </div>
            <div className="signup-text">아이디가 없으신가요? <span className="signup-link">회원가입 하기</span></div>

          </Modal>
      </div>
    </>
  )
}  

export default Login; 