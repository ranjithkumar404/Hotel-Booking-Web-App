import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
const Nav = () => {
  return (
    <>
    <div className='flex justify-between items-center h-[80px] shadow-md sticky text-white text-3xl p-[20px] bg-blue-400'>
        <Link to="/" className='text-black font-semibold'>Book4U.</Link>
        <div className=' space-x-8'>
            <button className='text-xl hover:bg-blue-400 hover:border-2 hover:border-black  w-[10vw] bg-black p-2 rounded-md'>Register</button>
            <button className='text-xl  bg-black hover:bg-blue-400 w-[10vw] p-2 hover:border-2 hover:border-black  rounded-md'>Login</button>
        </div>

    </div>
    <div>
      <Home/>
    </div>
    </>
  )
}

export default Nav