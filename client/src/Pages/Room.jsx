import React from 'react'
import { useLocation } from 'react-router-dom'
import UsefetchData from '../Hooks/Usefetch'
const Room = () => {
const location=useLocation()

const {data,lodaing,error}=UsefetchData(`http://localhost:3001/hotel/find/${location.state.id}`)
console.log(data);

  return (
    <>
    <div className='bg-[#ADD8E6] min-h-screen p-10'>

    <div className='flex flex-col rounded-md  bg-[#47b6db] shadow-md  min-h-screen justify-center items-center'>
    <div className=' ' key={data._id}>
        <h1>{data.name}</h1>
         <h1>{data.city}</h1>
</div>
<div>
  <h1>pics</h1>
</div>
      
   
    </div>
    </div>
    </>
  )
}

export default Room