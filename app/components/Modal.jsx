'use client'
import axios from 'axios';
import { useState } from 'react';

export default function Modal({openModal,closeModal}) {
    const [title,setTitle] = useState('')
    const [content,setContent] =useState('')

    function postSave(title,content){
      axios.post('/api/insert',{title:title,content:content})
    }
  return (
    <div>
    {openModal? 
    <div className="absolute w-1/2 h-1/2 bg-white justify-center items-center border-solid border-2 border-black rounded-lg text-black flex flex-col">
     <h2 className="text-center">게시글 등록</h2>
     <input onChange={(a)=>setTitle(a.target.value)} className="w-11/12 text-center mt-4 border" placeholder="제목을 입력하세요"></input>
     <input onChange={(a)=>setContent(a.target.value)} className='w-11/12 h-1/2 border mt-1 text-center' placeholder="내용을 입력하세요"></input>
     <div className="w-3/4 flex justify-around mt-2">
      <button className="border rounded-lg px-10 " onClick={()=>{postSave(title,content);closeModal()}}>등록</button>
      <button className="border rounded-lg px-10 ml-2" onClick={closeModal}>닫기</button>
     </div>
     </div>
     :null    
}
    </div>
  );
}
