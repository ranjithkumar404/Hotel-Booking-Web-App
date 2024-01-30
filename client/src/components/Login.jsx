import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import UsefetchData from '../Hooks/Usefetch'
import axios from 'axios'

const Login = () => {
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const navigate=useNavigate()
 const submit=async (e)=>{
  e.preventDefault();
  // const {data,loading,error}=UsefetchData(`http://localhost:3001/auth/login/${name}`)
  // console.log(data);
  // console.log(error);
try {
  const res= await axios.post('http://localhost:3001/auth/login',{name,password})
  console.log(res.status);
  if(res.status ===404) alert("User not found");
   else{
    localStorage.setItem('username',name);
    navigate('/')
   } 
} catch (error) {
 console.log(error);
  if(error.response.status === 404 || error.response.status === 400 ){
   alert("User not found!!");
  navigate('/register')
  }
  // console.log(error);
}
 }
  return (
   <>
   <div className='bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-black flex items-center justify-center h-screen w-screen'>
      <form className='flex flex-col items-center justify-center w-[350px] h-[350px] bg-cyan-500 shadow-lg shadow-cyan-500/50   focus:border rounded-md  space-y-3' action="" method="post">
        <input required onChange={(e)=>{setName(e.target.value)}}  value={name } className=' focus:outline-none bg-transparent border-b-[2px]  border-black placeholder-black focus:border-white  p-3' placeholder='User name' type="text" name="" id="" />
        <input required onChange={(e)=>{setPassword(e.target.value)}} value={password} className=' focus:outline-none bg-transparent focus:border-white  border-b-[2px] border-black placeholder-black p-3' placeholder='Password' type="password" name="" id="" />
        <button onClick={submit} className='bg-white  text-lg px-8 py-3 rounded-md hover:text-white hover:bg-cyan-500/50 hover:border-2 font-bold'>Login</button>
      </form>
   </div>
   </>
  )
}

export default Login