
import { useState,useEffect } from "react";
import axios from "axios"

const UsefetchData=(url)=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const[error,setError]=useState(false)

    useEffect(()=>{
        const fetch=async()=>{
            setLoading(true);
           try {
            const res=await axios.get(url)
            setData(res.data)
           } catch (error) {
            setError(error.message)
           }
           setLoading(false);
        };
        fetch()
    },[url])

    return {data,loading,error}
}

export default UsefetchData;