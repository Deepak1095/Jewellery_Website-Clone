import React from 'react'
import Navbar from './Navbar'
import {Link} from "react-router-dom"
import {
    FormControl,
    FormLabel,
    VStack,
    StackDivider
  } from '@chakra-ui/react'
const SignIn = () => {
    const[email,setEmail]= React.useState("")
    const[password,setPassword]= React.useState("")
    return(
    <div>
    <Navbar/>
      <div   style={{
        backgroundImage: 'url("https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/AppBanner/Harry/1X.jpg")',
        backgroundSize: "cover",
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
         
          <FormControl isRequired >
            
          <FormLabel>Email</FormLabel>
            <input style={{width:"60%"}}
              type="email"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            
          <FormLabel>Password</FormLabel>
            <input style={{width:"60%"}}
              type="password"
              name="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
           </FormControl>
          
         <div style={{display:"flex",gap:"30px" , marginTop:"20px"}}>
         <button  style={{width:"20%"}} >
            Sign In
            </button>
            <button  style={{width:"20%"}} >
          <Link to="/admin"  style={{paddingLeft: 13, textDecoration: 'none', color:"black"}}>Admin</Link>
            </button>
         
         </div>
         </VStack>
      </div>
      </div>
  )
}

export default SignIn