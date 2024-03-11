'use client'
import { useState } from "react";
import Modal from '../components/Modal'
export default function Postcreate() {
    const [openModal,setOpenModal] = useState(false)
    function modalChange (){
        setOpenModal((pev)=>!pev)
    }
  return (
    <div className="mb-5">
        <button onClick={modalChange}className="bg-transparent border-solid border-2 border-black rounded-lg text-black p-2">게시글 추가 +</button>
        <Modal openModal={openModal} closeModal={modalChange}></Modal>
    </div>
    
  );
}
