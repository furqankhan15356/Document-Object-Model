"use client"
import { useState } from "react";

export default function Home(){
  const [counter, setCount] = useState(0)

  function Increment(){
    setCount(counter + 1)
  }

  function Decrement(){
    setCount(counter - 1)
  }

  return(
    <>
    <div className="flex justify-center mt-72 space-x-6">
    <button className="bg-sky-300 hover:bg-sky-500 py-4 px-7 font-sans font-bold text-xl text-gray-700 rounded-lg"
    onClick={Increment}
    >Increment</button>
    <button className="bg-pink-300 hover:bg-pink-500 py-4 px-7 font-sans font-bold text-xl text-gray-700 rounded-lg"
    onClick={Decrement}
    >Decrement</button>
    
    </div>
    <div className="flex justify-center mt-16 font-bold text-3xl">
    <h2 className={counter >=10 ? 'text-rose-700' : 'text-indigo-300'} >Count:{counter}</h2>

    </div>
    </>
    
  )
}