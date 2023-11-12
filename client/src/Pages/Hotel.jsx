import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import UsefetchData from '../Hooks/Usefetch'
import Nav from '../components/Nav'
const Hotel = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const {place,sdate,edate}=location.state
   const {data,lodaing,error}=UsefetchData(`http://localhost:3001/hotel?city=${place}`)
  const handleSubmit=(i)=>{
    const id=i._id;
   navigate("/room",{state:{id}})
  }

  return (
    <>
    <Nav/>
    <div className='bg-[#ADD8E6] flex flex-col justify-center  space-y-4 py-24 items-center min-h-screen'>
{
  data.map((i)=>{
    return(
      <div className='p-4 hover:scale-105 duration-500 hover:shadow-lg flex  space-x-8  items-center w-[60vw] md:w-[30vw] rounded-md bg-gray-600/20'>
        <div>
     <img className=' rounded-md w-[22vw]   md:w-[10vw]' src={i.photos[0]} alt="hotel" />
        </div>
        <div className='space-y-2'>
        <p>{i.name} {i.type}</p>
        <p>{i.distance} from airport</p>
        <p>${i.cheapestPrice}</p>
        <button onClick={()=>handleSubmit(i)} className='bg-slate-400 text-white rounded-md p-2'>See Availability</button>
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