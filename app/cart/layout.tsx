export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (


      <div className="w-full ml-10 flex content-between flex-col">
        <p>현대카드 무이자이벤트중</p> 
        {children}
      </div>
    


  );
}
