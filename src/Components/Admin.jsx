import {React,useRef,useEffect,useState} from 'react'
import {Link} from "@chakra-ui/react"
import axios from "axios"
const Admin = () => {
    const [state,setState]=useState("")
    const val=useRef("")
    const data=(details)=>{
        axios.get(`https://js211-project.onrender.com/${details}`)
        .then(res=>console.log(res.data))
        }
    
useEffect(()=>{
    data(state)
},[state])
   
  return (
    <>
     <input type="text" ref={val} placeholder='enter the image link'/>
     <input type="text" value={state} onChange={(e)=>setState(e.target.value)}/>
    </>
  
  )
}

export default Admin