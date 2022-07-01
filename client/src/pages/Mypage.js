import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LoginModal from '../components/Modal/Login/Login';

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
    font-family: 'Roboto';
  }
  > center div {
    width: 20rem;
    background: lightblue;
    padding: 1.3rem;
  }
`;

export const EditInput = styled.div`
  width: 100%;
  font-size: 1.5rem;
  > input {
    margin-top: 3%;
    width: 80%;
    height: 5vh;
    font-size: 15px;
    border: 0;
    border-radius: 10px;
    outline: none;
    padding-left: 10px;
    text-align: center;
    background-color: rgb(253, 253, 253);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
`;

const Mypage = () => {
  const [userinfo, setUserinfo] = useState({
    email: '',
    userName: '',
  });

  const [newUsername, setNewUsername] = useState({
    newUsername: '',
  });

  const [modalOpen, setModalOpen] = useState(false);

  const [modifyUsername, setModifyUsername] = useState(false);

  const handleChangeUsername = () => {
    alert('미구현');
    // axios
    //   .patch(
    //     `http://localhost:8080/users/username`,
    //     {
    //       user_name: newUsername.newUsername,
    //     },
    //     {
    //       headers: { authorization: `Bearer ${localStorage.user}` },
    //       withCredentials: true,
    //     }
    //   )
    //   .then((res) => {
    //     setModalOpen(true);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const isAuthenticated = () => {
    axios
      .get(`http://localhost:8080/users/auth`, {
        withCredentials: true,
      })
      .then((res) => {
        setUserinfo(res.data.data.userInfo);
      });
  };

  const handleInputValue = (key) => (e) => {
    setNewUsername({ ...newUsername, [key]: e.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      isAuthenticated();
    }
  }, []);

  return (
    <>
      {localStorage.user ? (
        <MypageContainer>
          <center>
            <h1>{userinfo ? 'Mypage' : 'Mypage'}</h1>
            <EditInput>
              {modifyUsername ? (
                <>
                  닉네임 <input onChange={handleInputValue('newUsername')} />
                </>
              ) : (
                <>
                  닉네임 <input value={userinfo.userName || ''} readOnly />
                </>
              )}
            </EditInput>
            {modifyUsername ? (
              <button onClick={handleChangeUsername}>변경완료</button>
            ) : (
              <button onClick={() => setModifyUsername(!modifyUsername)}>
                닉네임 변경하기
              </button>
            )}

            <EditInput>
              이메일 <input value={userinfo.userEmail || ''} readOnly></input>
            </EditInput>
          </center>
        </MypageContainer>
      ) : (
        <LoginModal />
      )}
    </>
  );
};
export default Mypage;
