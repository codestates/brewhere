import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Landing/img/logo_x05_square.png";
import styled from "styled-components";
import "./Signup.css";

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
  z-index: 999; // 레이어의 맨 위에 모달 창이 나와야 하므로 가장 큰 수(999)로 설정
`;

export const ModalBtn = styled.button`
  padding: 1rem;
  color: #000;
  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: "dialog"
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

function Signup() {
  const navigate = useNavigate();

  const [userinfo, setUserinfo] = useState({
    user_name: "",
    user_email: "",
    password: "",
  });

  const [user_name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user_email, setEmail] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [validatedAll, setValidatedAll] = useState(false);

  const handleInputValue = (key) => (e) => {
    setUserinfo({ ...userinfo, [key]: e.target.value });
  };

  const openModalHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const checkPassword = (e) => {
    //  8자 이상의 영문, 숫자 조합
    const regExp = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/;
    // 형식에 맞는 경우 true 리턴
    console.log("비밀번호 유효성 검사 :: ", regExp.test(e.target.value));
    setPassword(e.target.value);
    if (regExp.test(e.target.value)) {
      setPasswordError(false);
    } else setPasswordError(true);
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || emailRegex.test(e.target.value))
      setEmailError(false);
    else setEmailError(true);
    setEmail(e.target.value);
  };

  const checkPasswordMatch = (e) => {
    if (e.target.value === password) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setConfirmPassword(e.target.value);
  };

  // const getIsActive = checkPassword && checkEmail  === true;

  const handleButtonValid = () => {
    validation();
    if (!validatedAll) alert("조건에 맞게 모든 칸을 작성해주세요");
    else onSubmit();
  };

  const validation = () => {
    // 만약, vaildate가 모두 통과되지 않았으면 false, 전부 통과하면 true
    if (!passwordError || !confirmPasswordError || !emailError) {
      setValidatedAll(true);
    }
  };

  const onSubmit = () => {
    console.log({ ...userinfo });
    axios
      .post(
        "http://localhost:8080/users/signup",
        { ...userinfo },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          // "rejectUnauthorized": false
        }
      )
      .then((res) => console.log(res))
      .then(navigate("/"));
    // TODO: Signup API Call
  };

  return (
    <>
      <ModalContainer onClick={openModalHandler}>
        <ModalBtn onClick={openModalHandler}>회원가입</ModalBtn>

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
                <img
                  src={logo}
                  alt="modal-signup-logo"
                  className="modal-signup-logo"
                />
              </div>

              <div className="desc input-title">이메일</div>
              {emailError ? (
                <div className="validate-text">
                  이메일 형식에 맞춰 작성해주세요.
                </div>
              ) : null}
              <input
                type="text"
                className="input-signup"
                placeholder="example@gmail.com"
                onBlur={onChangeEmail}
                onChange={handleInputValue("user_email")}
              />
              <div className="desc input-title">닉네임</div>
              <input
                type="text"
                className="input-signup"
                placeholder="MACDUCK"
                onBlur={onChangeUsername}
                onChange={handleInputValue("user_name")}
              />
              <div className="desc input-title">비밀번호</div>
              {passwordError ? (
                <div className="validate-text">
                  8자 이상의 영문, 숫자를 입력해야 합니다.
                </div>
              ) : null}
              <input
                type="text"
                className="input-signup"
                placeholder="8자 이상의 영문, 숫자를 입력해주세요"
                onBlur={checkPassword}
                onChange={handleInputValue("password")}
              />
              <div className="desc input-title">비밀번호 확인</div>
              {confirmPasswordError ? (
                <div className="validate-text">비밀번호가 다릅니다.</div>
              ) : null}
              <input
                type="text"
                className="input-signup"
                placeholder="8자 이상의 영문, 숫자를 입력해주세요"
                onChange={checkPasswordMatch}
              />

              <button className="signup-btn" onClick={handleButtonValid}>
                Let's Brew!
              </button>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
}

export default Signup;
