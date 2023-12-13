
import { createContext,React,useState } from 'react'
const SearchContext=createContext();
 const SearchContextProvider=({children})=>{
  const [sdate,setSdate]=useState(null)
  const [edate,setEdate]=useState(null)
  const date=(s,e)=>{
    setSdate(s)
    setEdate(e)
  }
  return(
    <SearchContext.Provider
    value={
     {  sdate,
      edate,
      date
    }
      
    }
    >
{children}
    </SearchContext.Provider>
  )
}

export  {SearchContext,SearchContextProvider};