import React from 'react'
import { SearchContext } from '../Hooks/SearchContext';
import { useLocation } from 'react-router-dom'
import UsefetchData from '../Hooks/Usefetch'
import { ImLocation2 } from 'react-icons/im';
import { useContext } from 'react';

const Room = () => {
const location=useLocation()
const {sdate,edate}=useContext(SearchContext)
console.log(sdate,edate);
//we need to convert the date into the string ,en-US is the date format of USA
// const formates=sdate.toLocaleDateString('en-US', { day: 'numeric', month: 'numeric' });
// const formate=edate.toLocaleDateString('en-US', { day: 'numeric', month: 'numeric' })
const s=sdate.getDate()
const m=sdate.getMonth()+1
const {data,loading,error}=UsefetchData(`http://localhost:3001/hotel/find/${location.state.id}`)

  return (
    <>
    <div className='bg-[#ADD8E6] box-border overflow-hidden h-screen p-10'>

    <div className='flex  flex-col rounded-md text-white bg-[#47b6db] shadow-md p-16 gap-3 justify-center  '>
    <div className=' flex justify-around' key={data._id}>
        <div><h1 className='text-3xl font-semibold'>{data.name}</h1>
         <h1 className='flex items-center text-2xl'>< ImLocation2 size={20}/>{data.city}</h1>
         <h1>{data.desc}</h1>
         <h1>{s}</h1>
         <h1>{m}</h1>
         </div>
         <div>
          <button className='bg-[#149fce] p-5 rounded-md'>Book now</button>
         </div>
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