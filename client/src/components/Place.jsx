import React from 'react'
import UsefetchData from '../Hooks/Usefetch'
const Place = () => {
    const {data,loading,error}=UsefetchData("http://localhost:3001/hotel/countbyc?cities=Kundapura,udupi,Mangalore")
   return (
      <>
     <div className="md:flex grid gap-3 text-[25px]   justify-center">
      {loading ?(<div className='w-screen flex items-center justify-center absolute text-center h-screen backdrop-blur-md'>
    <div className='text-5xl font-semibold'>Loading..</div>
    </div>) : (
        <>
          <div className="overflow-hidden">
            <img className='h-[200px] hover:scale-110 duration-500  w-[250px] rounded-md' 
              src="https://all.accor.com/middleware/images/1385747632498/1681988911601/so-text-with-image-600x500-low.jpg"
              alt=""
            
            />
            <div className="featuredTitles">
              <h1>Kundapura</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="overflow-hidden">
            <img className='h-[200px] hover:scale-110 duration-500   w-[250px] rounded-md' 
              src="https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/6179ad64046fb.jpg/1920x1080/fit/80/fbc7ee9fb38b18e69d4b438d2ee93345.jpg"
              alt=""
             
            />
            <div className="featuredTitles">
              <h1>Udupi</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="overflow-hidden">
            <img className='h-[200px] hover:scale-110 duration-500  w-[250px] rounded-md' 
              src="https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU="
              alt=""
             
            />
            <div className="featuredTitles">
              <h1>Mangalore</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
      
      </>
    )
}

export default Place