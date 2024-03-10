'use client'
export default function Modal({openModal}) {

  return (
    <div className="bg-white border-solid border-2 border-black rounded-lg text-black flex flex-col">
    {openModal? 
    <div>
     <h2>게시글 등록</h2>
     <input placeholder="제목을 입력하세요"></input>
     <input placeholder="내용을 입력하세요"></input>
     <button>등록</button>
     <button>닫기</button>
     </div>
     :null    
}
    </div>
  );
}
