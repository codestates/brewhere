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
            <img 
              className="modal-login-logo"
            src={ logo } alt='logo' />
            <button onClick={()=> setModalIsOpen(!modalIsOpen)}>close</button>
            <div>이메일</div>
            <input className="input-login" type="text" placeholder="example@example.com" />
            <div>비밀번호</div>
            <input className="input-login" type="text" placeholder="8자 이상의 영문, 숫자를 입력해주세요" />
          </Modal>
      </div>
    </>
  )
}  

export default Login; 