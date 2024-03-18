'use client'
import {signIn, signOut } from "next-auth/react"

export default function Loginbutton() {
  return (
    <>
        <button className="font-white" onClick={() => signIn()}>Giuhub</button>
    </>

  );
}

