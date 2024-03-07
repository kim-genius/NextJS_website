'use client'

import { useState } from "react"
import Image from 'next/image'
import 블루베리 from '/public/image/bluebarry.jpeg'

export default function Cartitem ({상품}){
    const [상품개수,set상품개수] = useState(0)
    return(
        <div>
        <h2>Products</h2>
        {        
            상품.map((i,index)=>{
                return(
                    <div>
                    <Image src = {블루베리}></Image>
                        <div className="m-20 mt-10 m-auto w-80 bg-white text-black p-10 rounded-md" key={index}>
                            <h4>{i[0]} {i[1]}</h4>
                            <span>{상품개수}</span>
                            <button onClick={()=>set상품개수(상품개수+1)}>+</button>
                        </div>
                     </div>
                       )})
        }
        </div>
    )
    
  }