'use client'
import axios from "axios";

export default function Delete({id}) {
    console.log(id)
    const deletePost = ()=>{
        axios.post('/api/delete',{id:id})
        .then(res=>console.log(res))
    }
    const deleteQueryString = ()=>{
      axios.get('/api/deletetest/name?ps=1234')
    }
  return <button className="text-black ml-5" onClick={deleteQueryString}>삭제</button>
    

}
