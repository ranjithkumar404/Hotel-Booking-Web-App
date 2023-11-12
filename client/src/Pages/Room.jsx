import React from 'react'
import { useLocation } from 'react-router-dom'
import UsefetchData from '../Hooks/Usefetch'
import { ImLocation2 } from 'react-icons/im';

const Room = () => {
const location=useLocation()

const {data,loading,error}=UsefetchData(`http://localhost:3001/hotel/find/${location.state.id}`)
console.log(data);
console.log(error);
  return (
    <>
    <div className='bg-[#ADD8E6] box-border overflow-hidden h-screen p-10'>

    <div className='flex  flex-col rounded-md text-white bg-[#47b6db] shadow-md p-16  justify-center  items-center'>
    <div className=' ' key={data._id}>
        <h1 className='text-3xl font-semibold'>{data.name}</h1>
         <h1 className='flex text-2xl'>< ImLocation2 size={30}/>{data.city}</h1>
         <h1>{data.desc}</h1>
</div>
<div className='grid  grid-cols-3 md:grid-cols-5 gap-2'>
 {
  loading?(<div className='w-screen flex items-center justify-center absolute text-center h-screen backdrop-blur-md'>
    <div className='text-5xl font-semibold'>Loading..</div>
    </div>):
  (data.photos?.map((i)=>{
    return (
      <div >
        <img className='w-[22vw] rounded-md md:w-[20vw]' src={i} alt="" />
      </div>
    )
  }))
 }
</div>
      
   
    </div>
    </div>
    </>
  )
}

export default Room