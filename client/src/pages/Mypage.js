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
    </>
  );
};
export default Mypage;