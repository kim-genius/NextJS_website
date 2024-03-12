'use client'
import axios from "axios";

export default function Delete({id}) {
    console.log(id)
    const deletePost = ()=>{
        axios.post('/api/delete',{id:id})
        .then(res=>console.log(res))
    }
  return <button className="text-black ml-5" onClick={deletePost}>삭제</button>
    

}
