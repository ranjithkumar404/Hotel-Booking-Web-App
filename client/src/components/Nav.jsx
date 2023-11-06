import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  
  return (
    <>
    <div className='flex w-screen justify-between items-center h-[80px] shadow-md fixed z-20  backdrop-blur-sm text-white text-3xl p-[20px] '>
        <Link to="/" className='text-black font-semibold'>Book4U.</Link>
        <div className=' space-x-8'>
            <button className='text-xl hover:bg-transparent hover:border-2 hover:border-black  w-[10vw] bg-black p-2 rounded-md'>Register</button>
            <button className='text-xl  bg-black hover:bg-transparent w-[10vw] p-2 hover:border-2 hover:border-black  rounded-md'>Login</button>
        </div>

    </div>
    
    </>
  )
}

export default Nav