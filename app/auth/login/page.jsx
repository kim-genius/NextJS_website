'use client'
import {signIn } from "next-auth/react"

export default function Login() {
  return (

    <div className="w-full h-screen flex flex-col justify-center items-center">
     <button className="text-black bg-gray-200 w-1/4 h-9 rounded" onClick={() => signIn()}>Giuhub</button>
     <button className="text-black bg-gray-200 w-1/4 h-9 mt-3 rounded">Google</button>
     </div>


  );
}

