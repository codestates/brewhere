import React, { } from "react";
import loginInfos from "../components/Modal/Login/Login.js"
import styled from "styled-components";

export const MypageContainer = styled.div`
  background-color: lightgray;
  margin-top: 130px;
  > h1 {
    padding: 2rem;
  }
`;

const Mypage = (userinfo) => {
  const hasUserinfo = userinfo === undefined
  // console.log(userinfo)
  return (
    <>
    <MypageContainer>
      <center>
        <h1>{hasUserinfo ? '' : 'Mypage'}</h1>
        <div className='username'>{hasUserinfo ? '' : userinfo.username}</div>
        <div className='email'>{hasUserinfo ? '' : userinfo.email}</div>
        <div className='mobile'>{hasUserinfo ? '' : userinfo.mobile}</div>
      </center>
    </MypageContainer>
    </>
  );
};
export default Mypage;