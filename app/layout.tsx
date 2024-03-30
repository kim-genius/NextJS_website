'use client'
import "./globals.css";
import Link from "next/link";
import useStore from "@/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Mode = useStore((state)=>state)


  return (
    <html lang="en">
      <body className={`text-white ${Mode.mode? "bg-gray-500":"bg-black"}`}>
      <div className="w-full ml-10 flex">
        <div className="w-full">
          <Link className="mr-10" href="/">home</Link>
          <Link className="mr-10" href="/list">list페이지</Link>
          <Link className="mr-10" href="/post">post페이지</Link>
        </div>
        
        <div className="w-full flex justify-end mr-4">
        <button className="bg-transparent text-xl mr-10" onClick={Mode.setMode}>🌙</button>
          <Link className="mr-10" href="/auth/login">login</Link>
          <Link className="mr-10" href="/auth/signup">sign up</Link>
        </div>
        
      </div>
        {children}
      </body>
    </html>
  );
}
