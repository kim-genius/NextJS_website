'use client'
import "./globals.css";
import Link from "next/link";
import Darkmode from "../app/components/Darkmode"
import handleSubmit from './components/Handlesubmit'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  


  return (
    <html lang="en">
      <body className={`text-white ${true? "bg-gray-500":"bg-black"}`}>
      <div className="w-full ml-10 flex">
        <div className="w-full">
          <Link className="mr-10" href="/">home</Link>
          <Link className="mr-10" href="/list">list페이지</Link>
          <Link className="mr-10" href="/post">post페이지</Link>
          <form action={handleSubmit}><button>버튼</button></form>
        </div>
        
        <div className="w-full flex justify-end mr-4">
        <Darkmode></Darkmode>
          <Link className="mr-10" href="/auth/login">login</Link>
          <Link className="mr-10" href="/auth/signup">sign up</Link>
        </div>
        
      </div>
        {children}
      </body>
    </html>
  );
}
