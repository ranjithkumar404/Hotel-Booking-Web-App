import React, { useState } from 'react'
import { SearchContext } from '../Hooks/SearchContext';
import { Link, useLocation } from 'react-router-dom'
import UsefetchData from '../Hooks/Usefetch'
import { ImLocation2 } from 'react-icons/im';
import { useContext } from 'react';

const Room = () => {
const location=useLocation()
const {sdate,edate}=useContext(SearchContext)
const [book,setbook]=useState(false);
const name=localStorage.getItem('username')
const change=()=>{
  setbook(true);
}
//needs to be modified to calculate the no.of nights
const calculate=(sdate,edate)=>{
  const sd=sdate.getDate()
const sm=sdate.getMonth()+1
const ed=edate.getDate()
const em=edate.getMonth()+1
const nights=(em-sm)*30+(ed-sd);
return nights;
}
const totalnights=calculate(sdate,edate)
const {data,loading,error}=UsefetchData(`http://localhost:3001/hotel/find/${location.state.id}`)

  return (
    <>
  
{
  name?(
    <>
    {book?(<div className='backdrop-blur-sm  absolute w-screen space-y-10  h-screen bg-transparent flex flex-col items-center justify-center text-center text-5xl   p-10'><p>You have successfully booked a  <p className='font-bold '>{data.name}'s ROOM!</p></p><Link  to="/" className='bg-[#149fce] text-center text-xl text-white p-2 rounded-md'>Back to Home</Link></div>):(<div className='bg-transparent'></div>)}
      <div className='bg-[#ADD8E6] box-border overflow-hidden h-screen p-10'>
      <div className='flex  flex-col rounded-md text-white bg-[#47b6db] shadow-md p-16 gap-3 justify-center  '>
    
    
   <div>
     <div className=' flex justify-around' key={data._id}>
        <div><h1 className='text-3xl font-semibold'>{data.name}</h1>
         <h1 className='flex items-center text-2xl'>< ImLocation2 size={20}/>{data.city}</h1>
         <h1>{data.desc}</h1>
        <h1>{totalnights}</h1>
         </div>
         <div>
          <button onClick={change} className='bg-[#149fce] p-5 rounded-md'>Book now</button>
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
    </div>

    </>
  ):(<div className='flex flex-col w-screen h-screen space-y-5 justify-center items-center'><p className='text-5xl'>"Login or Register to Book a room"</p>
  <Link  to="/" className='bg-[#149fce] text-center text-xl text-white p-2 rounded-md'>Back to Home</Link>
  </div>)
}
    </>
  )
}

export default Room