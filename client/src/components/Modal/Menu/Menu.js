import React, { useState } from 'react';
import Modal from 'react-modal';

function Menu () {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <button onClick={()=> setModalIsOpen(!modalIsOpen)}>메뉴</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >
        This is Menu content
        <button onClick={()=> setModalIsOpen(!modalIsOpen)}>close</button>
      </Modal>
    </>
  )
}  

export default Menu; 