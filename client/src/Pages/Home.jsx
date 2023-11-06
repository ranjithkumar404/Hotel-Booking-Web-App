import React from 'react'
import Property from '../components/Property'
import Nav from '../components/Nav'
import Place from '../components/Place'
import Featured from '../components/Featured'

const Home = () => {
  return (
    <>
   <div className='overflow-hidden bg-blue-400'>
   <Nav/>
 <div className='p-5 space-y-10 pt-20 '>
 <p className='text-center font-semibold text-xl'>Browse by Place</p>
<Place/>
 <p className='text-center font-semibold text-xl'>Browse by Property type</p>
    <Property/>
    <p className='text-center font-semibold text-xl'>Browse by Featured</p>
    <Featured/>
 </div>
   </div>
    </>
  )
}

export default Home