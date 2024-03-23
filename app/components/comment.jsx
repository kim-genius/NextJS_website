'use client'

import axios from "axios"
import { useEffect, useState } from "react"

export default function Comment({postId}) {
  const [comment,setComment] = useState("")
  const [commentList,setCommentList] = useState([])

  useEffect(()=>{
    axios.get(`/api/commentList?postId=${postId}`)
    .then((res)=>{return(setCommentList(res.data),console.log('뭐나옴?',comment))})
  },[])

  return (
      <div className="flex flex-col text-black border-solid border-black border-2">
        <div className="text-center">댓글목록</div>
        <div className="bg-gray w-full h-1/2">
          {commentList.length > 0? commentList.map((a,index)=>{
            return(
            <div className="w-full bg-gray text-black flex flex-col p-4 content-center" key={index}>
              <div className="flex w-full">
                <p className="w-1/2 text-xl">{a.content}</p>
                <span className="text-sm text-slate-300 ml-2 ">{a.writer}</span>
            </div>
            <hr className="text-center mt-3 w-7/12 bg-slate-500"></hr>
            </div>
            )
          }) :'댓글없음'}
        </div>
        <input onChange={(e)=>{setComment(e.target.value)}} value={comment}/>
        <button onClick={()=>{
          axios.post("/api/comment",{postId:postId,comment:comment}).then(()=>setComment(""))
          }}>댓글전송</button>
      </div>
  )
} 