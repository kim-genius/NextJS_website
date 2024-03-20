'use client'

import axios from "axios"
import { useEffect, useState } from "react"

export default function Comment({postId}) {
  const [comment,setConnent] = useState("")
  const [commentList,setCommentList] = useState([])

  useEffect(()=>{
    axios.get(`/api/commentList?postId=${postId}`)
    .then((res)=>{return(console.log(res),setCommentList(res.data))})
  },[comment,setConnent])

  return (
      <div className="flex flex-col text-black border-solid border-black border-2">
        <div>댓글목록</div>
        <div className="bg-gray w-1/2 h-1/2">
          {commentList.map((a,index)=>{
            return(
            <div className="bg-gray text-black flex" key={index}>
            <p>{a.content}</p>
            <span className="text-gray ml-2">{a.writer}</span>
            </div>
            )
          })}
        </div>
        <input onChange={(e)=>{setConnent(e.target.value)}}/>
        <button onClick={()=>{
          axios.post("/api/comment",{postId:postId,comment:comment})
          }}>댓글전송</button>
      </div>
  )
} 