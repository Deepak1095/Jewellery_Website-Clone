//import { Link,Navigate, useNavigate } from "react-router-dom";
import React from "react"
import Navbar from "./Navbar";
import axios from "axios"
import {Link} from "react-router-dom"
import {
  FormControl,
  FormLabel,
  VStack,
  StackDivider
} from '@chakra-ui/react'

function Login() {
  const [email,setEmail]=React.useState("")
  const [password,setPassword]=React.useState("")
  const [dl,setDl]=React.useState("")
  
  const submitButton=async(e)=>{
    (password.length<8)?alert("password must be greater than 8 digit"):(
        axios.post('https://js211-project.onrender.com/login', {
            email,password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
    )}
     


    const deleteButton=async(id)=>{
        try{
         let res=await fetch(`https://js211-project.onrender.com/login/${id}`,{
          method:"Delete",
        })
    
        res=await res.json()
       
      }
      catch(err){
        console.log(err)
      }
    }

  
  return (
    <div className="login-page">
<Navbar />
<div   style={{
        backgroundImage: 'url("https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image3.jpg")',
        backgroundSize:"cover",
        height: "90vh",
        color: "#f5f5f5"
      }}>

         <VStack
          divider={<StackDivider borderColor='gray.200' />}
           spacing={4}
           align='stretch'
           width="40%"
           margin="auto"
 
>
         
          <FormControl isRequired style={{marginTop:"100px"}} >
          <FormLabel>Email</FormLabel>
            <input style={{width:"60%",height:"20px"}}
              type="email"
              name="email"
              value={email.value} 
              onChange={(e)=>setEmail(e.target.value)} 
            />
             <FormLabel>Password</FormLabel>
            <input style={{width:"60%",height:"20px"}}
              type="password"
              name="password"
              value={password.value}
               onChange={(e)=>setPassword(e.target.value)}
            />
           </FormControl>
          
         
            <button onClick={submitButton} style={{width:"80px",height:"30px",fontSize:"16px"}} >
            submit
            </button>
            <div style={{display:"flex", gap:"60px",marginTop:"20px"}}>
              <button style={{width:"80px",height:"30px"}}>
              <Link to="/signup"  style={{paddingLeft: 13, textDecoration: 'none', color:"white"}} >Sign Up </Link>
              </button>
            <button style={{width:"80px",height:"30px"}}>
              <Link to="/admin"  style={{paddingLeft: 13, textDecoration: 'none', color:"white"}} >Admin</Link>
            </button>

            </div>
          
          </VStack>

    </div>
    </div>
  );
}
export default Login;
