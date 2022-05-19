<<<<<<< HEAD
import React, { } from "react";
import loginInfos from "../components/Modal/Login/Login.js"

const Mypage = (userinfo) => {
  const hasUserinfo = userinfo === undefined
  return (
    <>
    <div>
      <center>
        <h1>{hasUserinfo ? '' : 'Mypage'}</h1>
        <div className='username'>{hasUserinfo ? '' : userinfo.username}</div>
        <div className='email'>{hasUserinfo ? '' : userinfo.email}</div>
        <div className='mobile'>{hasUserinfo ? '' : userinfo.mobile}</div>
      </center>
    </div>
=======
import React from "react";
import loginInfos from "../components/Modal/Login/Login.js";
import styled from "styled-components";

export const MypageContainer = styled.div`
  background-color: lightgray;
  margin-top: 60px;
  > center {
    max-width: 1440px;
    margin: 0 auto;
  }
  > center h1 {
    font-size: 3rem;
    padding: 1rem;
    font-family: "Roboto";
  }
  > center div {
    width: 20rem;
    background: lightblue;
    padding: 1.3rem;
  }
`;

const Mypage = (userinfo) => {
  const hasUserinfo = userinfo === undefined;
  console.log(userinfo);
  return (
    <>
      <MypageContainer>
        <center>
          <h1 className="mypageTitle">{hasUserinfo ? "" : "Mypage"}</h1>
          <div className="useremail">
            {hasUserinfo ? "" : userinfo.useremail}useremail이 오는 자리
          </div>
          <div className="nickname">
            {hasUserinfo ? "" : userinfo.nickname}nickname이 오는 자리
          </div>
        </center>
      </MypageContainer>
>>>>>>> fc64cb463d4b358aa5bd68bbced3d7d30d901e22
    </>
  );
};
export default Mypage;
