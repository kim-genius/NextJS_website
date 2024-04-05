'use client'
import "./globals.css";
import Link from "next/link";
import Darkmode from "../app/components/Darkmode"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  


  return (
    <html lang="en">
      <body className={`text-black ${true? "bg-white":"bg-gray"}`}>
      <div className="w-full flex mt-4 h-10 border-b-2">
        <div className="w-full ml-4">
          <Link className="mr-10" href="/">home</Link>
          <Link className="mr-10" href="/list">list페이지</Link>
          <Link className="mr-10" href="/post">post페이지</Link>
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
