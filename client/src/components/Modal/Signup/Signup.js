import React, { useState } from 'react';
import logo from '../../Landing/img/logo_x05_square.png'
import styled from 'styled-components';
import './Signup.css'


export const ModalContainer = styled.div`
// TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
 // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
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
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 600px;
  height: 750px;
  border-radius: 1rem;
  position: relative;
  > div.close-btn{
    position: absolute;
    top:2px;
    right:7px;
    cursor: pointer; 
  > div.desc {
    color: brown;
    margin-top: 25px;
  }
  }
`;

function Signup () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  
  const openModalHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const checkPassword = (e) => {
    //  8자 이상의 영문, 숫자 조합
    const regExp = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/
    // 형식에 맞는 경우 true 리턴
    console.log('비밀번호 유효성 검사 :: ', regExp.test(e.target.value));
    setPassword(e.target.value)
    if (regExp.test(e.target.value)) { 
      setPasswordError(false);
    }
    else setPasswordError(true);
}

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const onChangeEmail = (e) => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
    else setEmailError(true);
    setEmail(e.target.value);
  };

  const checkPasswordMatch = (e) => {
    if (e.target.value === password) setConfirmPasswordError(false)
    else setConfirmPasswordError(true)
    setConfirmPassword(e.target.value);
  }

  // const getIsActive = checkPassword && checkEmail  === true;

  const handleButtomValid = () => {
    if (validation === false) alert('조건에 맞게 모든 칸을 작성해주세요');
  }

  const validation = () => {
    if(!password) setPasswordError(true);
    if(!confirmPassword) setConfirmPasswordError(true);
    if(!email) setEmailError(true);

    if(password && confirmPassword && username && email) return true;
    else return false;
}

const onSubmit = (e) => {
  if(validation()) return;
  // TODO: Signup API Call
}

  return (
    <>
      <ModalContainer onClick={openModalHandler}>
        <ModalBtn onClick={openModalHandler}>
          회원가입
        </ModalBtn>

          { modalIsOpen ? <ModalBackdrop onClick={openModalHandler}>
                <ModalView onClick={(event) => {
                  event.stopPropagation()
                }
              }>
                <div className="close-btn" onClick={openModalHandler}>
                  &times;
                </div>

                <div className="desc">
                  <img src={logo} alt="modal-signup-logo" className="modal-signup-logo"/>
                </div>

                <div className="desc">이메일</div>
                { emailError ? <div className="validate-text">이메일 형식에 맞춰 작성해주세요.</div> : null }
                <input 
                  type="text" 
                  className='input-signup' 
                  placeholder="example@example.com" 
                  // onBlur={  }
                  onChange={ onChangeEmail }
                />
                <div className="desc">닉네임</div>
                <input 
                  type="text" 
                  className='input-signup' 
                  placeholder="MACDUCK" 
                  onChange={ onChangeUsername }
                />
                <div className="desc">비밀번호</div>
                { passwordError ?
                  <div className="validate-text">8자 이상의 영문, 숫자를 입력해야 합니다.</div> : null
                }
                <input 
                  type="text" 
                  className='input-signup'
                  placeholder="8자 이상의 영문, 숫자를 입력해주세요" 
                  onChange={ checkPassword } 
                />
                <div className="desc">비밀번호 확인</div>
                { confirmPasswordError ?
                  <div className="validate-text">비밀번호가 다릅니다.</div> : null
                }
                <input 
                  type="text" 
                  className='input-signup-check' 
                  placeholder="8자 이상의 영문, 숫자를 입력해주세요" 
                  onChange={ checkPasswordMatch }
                />

                <button 
                  className="signup-btn"
                  onClick={ handleButtomValid }
                >
                Let's Brew!
                </button>

              </ModalView>
            </ModalBackdrop> 
            : null}
      </ModalContainer>
    </>
  );
}  

export default Signup; 