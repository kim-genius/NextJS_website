'use client'
import useStore from '../store'
export default function Home() {
  const mode = useStore((state)=>state.mode)


  return (
    <main className ={`${mode? "bg-blue":"bg-black"}`}>
    <h1 className={`mt-32 text-6xl font-bold underline text-center `}>nextJS website</h1>
    <h3 className={`mt-28 text-4xl font-bold text-center }`}>by Genius</h3>
    </main>
  );
}
