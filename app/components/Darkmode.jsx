'use client'
import useStore from "@/store";
import { useEffect } from "react";

export default function Darkmode() {
    const Mode = useStore((state)=>state)
    useEffect(()=>{
        document.cookie=`mode=light;max-age=${(3600*24*400)}`
    },[])


  return (
    <>
        <button className="bg-transparent text-xl mr-10" onClick={Mode.setMode}>🌙</button>
    </>

  );
}

