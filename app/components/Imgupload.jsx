'use client'

import axios from "axios";


export default function Imgupload() {
  return (
    <>
        <input type="file" accept='image/*' onChange={async (e)=>{
          let file =   e.target.files[0]
          let res = encodeURIComponent(file.name)
          let result = await axios.get(`/api/img?img=?${res}`)
          console.log(result)
          
        }}></input>
        <img src="" alt=""></img>
    </>

  );
}

