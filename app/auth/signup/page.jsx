'use client'

export default function Signup() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
    <form className="flex flex-col" action="/api/signup" method="post" >
        <input className="text-black"  name="email"></input>
        <input className="text-black mt-5" name="password"></input>
        <button type="submit" className="border border-solid rounded p-1 mt-3">회원가입</button>
     </form>
     </div>



  );
}

