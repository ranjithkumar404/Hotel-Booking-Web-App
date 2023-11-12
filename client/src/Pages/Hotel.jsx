import React from 'react'
import { useLocation } from 'react-router-dom'
import UsefetchData from '../Hooks/Usefetch'
const Hotel = () => {
    const location=useLocation()
    const {place,sdate,edate}=location.state
   const {data,lodaing,error}=UsefetchData(`http://localhost:3001/hotel?city=${place}`)
  

  return (
    <>
    <div className='bg-[#ADD8E6] flex flex-col justify-center  space-y-4 py-10 items-center h-full'>
{
  data.map((i)=>{
    return(
      <div className='p-4 hover:scale-105 duration-500 hover:shadow-lg flex  space-x-8 items-center w-[60vw] md:w-[30vw] rounded-md bg-gray-600/20'>
        <div>
     <img className='h-fit rounded-md w-[22vw]   md:w-[8vw]' src={i.photos[0]} alt="hotel" />
        </div>
        <div className='space-y-2'>
        <p>{i.name} {i.type}</p>
        <p>{i.distance} from airport</p>
        <p>${i.cheapestPrice}</p>
        <button className='bg-slate-400 text-white rounded-md p-2'>See Availability</button>
        </div>
      </div>
    )
  })
}
    </div>
    </>
  )
}

export default Hotel