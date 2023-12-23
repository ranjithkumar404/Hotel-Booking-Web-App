import React from 'react'
import Property from '../components/Property'
import Nav from '../components/Nav'
import Place from '../components/Place'
import Featured from '../components/Featured'
import Search from '../components/Search'

const Home = () => {
  return (
    <>
   <div className='overflow-hidden  bg-[#ADD8E6]'>
   <Nav/>
 <div className='p-5 space-y-10 pt-24 '>
  <Search/>
 <p className='text-center font-semibold text-[35px]'>Browse by Place</p>
<Place/>
 <p className='text-center font-semibold text-[35px] text-xl'>Browse by Property type</p>
    <Property/>
    <p className='text-center font-semibold text-[35px] text-xl'>Browse by Featured</p>
    <Featured/>
 </div>
   </div>
    </>
  )
}

export default Home