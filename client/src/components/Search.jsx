import{ React,useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Search = () => {
    const [place,setPlace]=useState('')
    const [sdate,setSdate]=useState(new Date())
    const [edate,setEdate]=useState()
    const handleS=(date)=>{
        setSdate(date)
    }
    const handleE=(date)=>{
      setEdate(date)
  }
  return (
    <>
     <div className='flex  text-white  justify-center'>
       <div className='md:flex grid p-2 gap-3  bg-slate-900/20 rounded-md shadow-md  md:w-[700px]'>
       <input className=' bg-transparent  focus:outline-none placeholder-white  w-[150px] text-white rounded-md p-3 ' onChange={(e)=>setPlace(e.target.value)} value={place}  type="text" placeholder='Place'/>
{/* <input className='bg-transparent focus:outline-none   rounded-md p-3 ' placeholder='Date' type="date" /> */}
<DatePicker className='bg-transparent focus:outline-none  placeholder-white rounded-md p-3'
  selected={sdate}
  startDate={sdate}
 selectsStart
   onChange={handleS}
   endDate={edate}
   placeholderText='Start Date'
/>
<DatePicker
className='bg-transparent focus:outline-none placeholder-white   rounded-md p-3'
  selected={edate}
  startDate={sdate}
selectsEnd
   onChange={handleE}
   endDate={edate}
   placeholderText='End Date'
/>
<button className='bg-gray-600 hover:bg-transparent hover:text-black  hover:bg-gray-700 rounded-md p-3'>Search</button>
       </div>
     </div>
    </>
  )
}

export default Search