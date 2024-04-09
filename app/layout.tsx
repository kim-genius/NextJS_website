'use client'
import "./globals.css";
import useStore from '../store'
import Authsession from './components/Authsession'
import Header from'./components/Header'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const mode = useStore((state)=>state.mode)

  return (
    <html lang="en">
      <body className={`text-black ${mode? "bg-white":"bg-black text-white"}`}>
      <Authsession>
      <Header></Header>
        {children}
      </Authsession>
      </body>
    </html>
  );
}
