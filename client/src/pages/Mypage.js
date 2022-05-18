import React, { } from "react";

const Mypage = (props) => {
  const hasUserinfo = props.userinfo === undefined
  return (
    <div>
      <center>
        <h1>{hasUserinfo ? '' : 'Mypage'}</h1>
        <div className='username'>{hasUserinfo ? '' : props.userinfo.username}</div>
        <div className='email'>{hasUserinfo ? '' : props.userinfo.email}</div>
        <div className='mobile'>{hasUserinfo ? '' : props.userinfo.mobile}</div>
        <button className='btn btn-logout' onClick={hasUserinfo ? '' : props.handleLogout}>
          {hasUserinfo ? '' : 'logout'}
        </button>
      </center>
    </div>

  );
};
export default Mypage;