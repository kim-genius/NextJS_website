'use client'

import axios from "axios";
import { useState } from "react";

export default function Imgupload() {
    let [src, setSrc] = useState('')
  return (
    <>
        <input type="file" accept='image/*' onChange={async (e)=>{
          let file =   e.target.files[0]
          let fileName = encodeURIComponent(file.name)
          let res = await axios.get(`/api/img?file=${fileName}`)
          res = res.data
          console.log('res결과',res.url)
           //S3 업로드
           const formData = new FormData()
           Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
             formData.append(key, value)
           })
           let 업로드결과 = await fetch(res.url, {
             method: 'POST',
             body: formData,
           })
           console.log(업로드결과)
 
           if (업로드결과.ok) {
            console.log('성공')
             setSrc(업로드결과.url + '/' + fileName)
           } else {
             console.log('실패')
           }
           
         }

        }></input>
        <img src={`${src}`} alt=""></img>
    </>

  );
}

