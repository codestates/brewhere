import React, { useState } from 'react';
import Modal from 'react-modal';

function Login () {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <button onClick={()=> setModalIsOpen(!modalIsOpen)}>로그인</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >
        This is Login content
        <button onClick={()=> setModalIsOpen(!modalIsOpen)}>close</button>
      </Modal>
    </>
  )
}  

export default Login; 