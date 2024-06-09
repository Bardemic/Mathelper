'use client'
import Image from "next/image";
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <div className="h-screen bg-slate-700 p-4 flex flex-col items-center">
      <h1 className="py-8 w-2/3 text-5xl text-center text-blue-50">Get a Headstart for Your Math Classes <span className="font-bold text-blue-400">Today</span></h1>
      <h2 className="text-xl w-1/3 text-center text-gray-200">Find resources for many math courses to help you study without the worry of finding the best material!</h2>
      <div className="py-8 flex justify-evenly gap-4 w-1/3">
        <button className="p-2 rounded-lg outline outline-blue-400 w-32 hover:bg-blue-400" onClick={() => router.push('courses/')}>View Classes</button>
        <button className="p-2 rounded-lg outline outline-blue-400 w-32 hover:bg-blue-400">Sign Up</button>
      </div>
    </div>
  );
}
