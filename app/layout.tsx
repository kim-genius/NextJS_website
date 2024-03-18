import "./globals.css";
import Link from "next/link";
import Loginbutton from './components/Loginbutton';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className='bg-gray-500 text-white'>
      <div className="w-full ml-10 flex content-between">
        <Link className="mr-10" href="/">home</Link>
        <Link className="mr-10" href="/list">list페이지</Link>
        <Link className="mr-10" href="/post">post페이지</Link>
        <Loginbutton></Loginbutton>
      </div>
        {children}
      </body>
    </html>
  );
}
