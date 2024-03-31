'use client'
import useStore from "@/store";

export default function Darkmode() {
    const Mode = useStore((state)=>state)
    document.cookie=`mode=light;max-age=${(3600*24*400)}`
    
  return (
    <>
        <button className="bg-transparent text-xl mr-10" onClick={Mode.setMode}>🌙</button>
    </>

  );
}

