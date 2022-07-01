import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import bars from "./../../Nav/img/bars.png";

export const ModalContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;
`;

export const ModalBtn = styled.button`
  > img {
    width: 40px;
    height: 40px;
  }
  text-decoration: none;
  border: none;
  padding: 20px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: rgba(44, 31, 15, 0.9);
  color: #fff;
  width: 20rem;
  height: 100vh;
  position: relative;
  padding: 2rem 1rem 0 0;
  > div.close-btn {
    position: absolute;
    top: 2px;
    left: 7px;
    cursor: pointer;
    color: #fff;
    font-size: 4rem;
  }
  > div.desc {
    font-family: "Roboto";
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 2rem 0 0;
    padding: 0.5rem;
  }
  > a.desc {
    font-family: "Roboto";
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 2rem 0 0;
    padding: 0.5rem;
    color: #fff;
  }
`;

function Menu() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModalHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };
  // const history = useHistory('');
  // 모달 창이 열렸을 때, 스크롤 막기
  // if (modalIsOpen) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "unset";
  // }

  return (
    <>
      <ModalContainer onClick={openModalHandler}>
        <ModalBtn onClick={openModalHandler}>
          <img src={bars} />
        </ModalBtn>

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
              <div className="desc">MENU</div>
              <NavLink to="/mypage/mypage" className="desc">
                <div>마이페이지</div>
              </NavLink>
              <div className="desc">브루어리 찾기</div>
              <div className="desc">찜한 목록</div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
}

export default Menu;
