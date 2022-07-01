import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 25rem;
  height: 7rem;
  border-radius: 1rem;
`;

const ModalBtn = styled.button`
  background-color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 1rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  margin-top: 1rem;
  cursor: pointer;
  h6 {
    font-weight: 700;
  }
`;

const ConfirmModal = ({ handleModal, children }) => {
  return (
    <ModalContainer>
      <div onClick={() => window.location.replace('/')}>
        <ModalBackdrop onClick={handleModal}>
          <ModalView
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {children}
            <div onClick={() => window.location.replace('/')}>
              <ModalBtn onClick={handleModal}>
                <h6>확인</h6>
              </ModalBtn>
            </div>
          </ModalView>
        </ModalBackdrop>
      </div>
    </ModalContainer>
  );
};

export default ConfirmModal;
