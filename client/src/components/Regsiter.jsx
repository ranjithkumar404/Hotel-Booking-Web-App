import axios from "axios"
import { useState } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom"

const Regsiter = () => {
  const [password,setPassword]=useState('')
  const [username,setName]=useState('')
  const [email,setMail]=useState('')
  const navigate=useNavigate()
 const submit=async (e)=>{
  e.preventDefault();
  // const {data,loading,error}=UsefetchData(`http://localhost:3001/auth/login/${name}`)
  // console.log(data);
  // console.log(error);
try {
  const res= await axios.post('http://localhost:3001/auth/register',{username,email,password})
  console.log(res.status);
  //if(res.status ===404) alert("User not found");
 
    localStorage.setItem('username',username);
    navigate('/')
   
} catch (error) {
 if(error.response.status ==404) alert("User name already exist!!")
  console.log(error);
}
 }
  return (
   <>
   <div className='bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] flex items-center justify-center h-screen w-screen'>
      <form className='flex flex-col items-center justify-center w-[350px] h-[350px] bg-[#40c4f0]  rounded-md shadow-md backdrop-blur-sm space-y-3' action="" method="post">
        <input required onChange={(e)=>{setName(e.target.value)}}  value={username } className=' focus:outline-none   rounded-md p-3' placeholder='User name' type="text" name="" id="" />
        <input required onChange={(e)=>{setPassword(e.target.value)}} value={password} className=' focus:outline-none   rounded-md p-3' placeholder='Password' type="password" name="" id="" />
        <input required onChange={(e)=>{setMail(e.target.value)}} value={email} className=' focus:outline-none   rounded-md p-3' placeholder='E-mail address' type="email" name="" id="" />
        <button onClick={submit} className='bg-[#14a5d5] hover:text-white hover:bg-[#40c4f0] p-3 rounded-md text-white'>Register</button>
      </form>
   </div>
   
   </>
  )

}

export default Regsiter