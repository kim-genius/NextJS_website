'use client'
import axios from 'axios';
import { useState } from 'react';

export default function Modal({openModal,closeModal}) {
    const [title,setTitle] = useState('')
    const [content,setContent] =useState('')

    function postSave(title,content){
      axios.post('/api/insert',{title:title,content:content})
      .then((res)=>console.log(res))
    }
  return (
    <div>
    {openModal? 
    <div className="bg-white border-solid border-2 border-black rounded-lg text-black flex flex-col">
     <h2 className="text-center">게시글 등록</h2>
     <input onChange={(a)=>setTitle(a.target.value)} placeholder="제목을 입력하세요"></input>
     <input onChange={(a)=>setContent(a.target.value)} className='h-auto' placeholder="내용을 입력하세요"></input>
     <button onClick={()=>{postSave(title,content)}}>등록</button>
     <button onClick={closeModal}>닫기</button>
     </div>
     :null    
}
    </div>
  );
}
