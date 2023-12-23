import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const Nav = () => {
  const location=useLocation();
  return (
    <>
    <div className='flex w-screen justify-between items-center h-[80px] shadow-md fixed z-20  backdrop-blur-sm text-white text-3xl p-[20px] '>
        <Link to="/" className='text-black font-semibold'>Book4U.</Link>
        <div className='flex items-center justify-center space-x-8'>
            {
              location.state? (<><h1 className='text-black p-3'>{location.state.name}</h1>
              <Link to='/' className='text-xl hover:bg-transparent hover:border-2 hover:border-black text-center  w-[10vw] bg-black p-2 rounded-md'>Logout</Link></>):(
             <><Link to='' className='text-xl hover:bg-transparent hover:border-2 hover:border-black  w-[10vw] bg-black p-2 rounded-md'>Register</Link>
             <Link to='/login' className='text-xl  bg-black hover:bg-transparent w-[10vw] p-2 hover:border-2 hover:border-black  rounded-md'>Login</Link></> )
            }
        </div>

    </div>
    
    </>
  )
}

export default Nav