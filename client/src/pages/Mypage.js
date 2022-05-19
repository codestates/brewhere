import React, { } from "react";
import loginInfo from "../components/Modal/Login/Login"

const Mypage = (loginInfo) => {
  const hasUserinfo = loginInfo === undefined
  console.log(loginInfo)
  return (
    <div>
      <center>
        <h1>{hasUserinfo ? '' : 'Mypage'}</h1>
        <div className='username'>{hasUserinfo ? '' : loginInfo.username}</div>
        <div className='email'>{hasUserinfo ? '' : loginInfo.email}</div>
        <div className='mobile'>{hasUserinfo ? '' : loginInfo.mobile}</div>
      </center>
    </div>

  );
};
export default Mypage;