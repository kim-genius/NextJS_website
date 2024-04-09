'use client'
import Link from "next/link";
import Darkmode from "./Darkmode"
import { signOut, useSession } from "next-auth/react";


export default function Header() {
   const {data:session} = useSession()
  return (
      <div className="w-full flex mt-4 h-10 border-b-2">
        <div className="w-full ml-4">
          <Link className="mr-10" href="/">home</Link>
          <Link className="mr-10" href="/list">list페이지</Link>
          <Link className="mr-10" href="/post">post페이지</Link>
        </div>
        
        <div className="w-full flex justify-end mr-4">
          <Darkmode></Darkmode>
      {session?   <button className="mb-3 mr-2"onClick={()=>signOut()}>log Out</button>:    
            <>
           <Link className="mr-10" href="/auth/login">log In</Link>
          <Link className="mr-10" href="/auth/signup">sign Up</Link>
          </>
          }
        
        </div>
        
      </div>
  );
}
