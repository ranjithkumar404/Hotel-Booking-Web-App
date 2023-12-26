import React from 'react'
import UsefetchData from '../Hooks/Usefetch'
const Featured = () => {
    const {data,loading,error}=UsefetchData("http://localhost:3001/hotel/featured")
    console.log(data);
    console.log(error);
    const images=[
        "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
        "https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg",
        "https://img.freepik.com/premium-photo/minsk-belarus-august-2017-columns-guestroom-hall-reception-modern-luxury-hotel_97694-6572.jpg",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/463156637.jpg?k=5d913fb55963d82c13fe5960117723b5d57007e15e813be871395bf090418f2f&o=&hp=1"
        
    ]
    return (
   <>
   <div className='md:flex  grid gap-3 items-center text-[25px]  justify-center'>
   {
  loading?(<div className='w-screen flex items-center justify-center absolute text-center h-screen backdrop-blur-md'>
  <div className='text-5xl font-semibold'>Loading...</div>
  </div>):
  (
    <>
    {data && images.map((i,x)=>{
        return(

            <div className='text-black overflow-hidden text-2xl font-bold' key={x}>
                <img className='h-[200px] hover:scale-105 duration-500  w-[250px] rounded-md' src={i} alt="" />
                <div>
                <p >{data[x]?.name}</p>
                <p>{data[x]?.city}</p>
                <p>Starting from {data[x]?.cheapestPrice}</p>
                </div>
            </div>
        )
    })
    }
    </>
  )
   }
   </div>
   </>
  )
}

export default Featured