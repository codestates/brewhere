import React, { useState, useHistory } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Menu () {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const history = useHistory('');
    // 모달 창이 열렸을 때, 스크롤 막기
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else { document.body.style.overflow = "unset" }
     
  return (
    <>
      <button onClick={()=> setModalIsOpen(!modalIsOpen)} >메뉴</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >
        {/* onClick = { 마이페이지, 지도, 찜한 목록 Link } */}
        {/*  */}
        <div 
        // onClick={() => history('/mypage')}
        >마이페이지</div>
        <div>지도</div>
        <div>찜한 목록</div>
        <button onClick={()=> setModalIsOpen(!modalIsOpen)}>close</button>
      </Modal>
    </>
  )
}  

export default Menu; 