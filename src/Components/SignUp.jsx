
import {React,useReducer} from "react"
import axios from "axios"
import {
    FormControl,
    FormLabel,
    VStack,
    StackDivider
  } from '@chakra-ui/react'
import Navbar from "./Navbar"
 import {Link} from "react-router-dom"

export default function SignUp() {
    const formInitialState = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  
    const [usersDetails, dispatchFormValue] = useReducer(
      (curVal, newVal) => ({ ...curVal, ...newVal }),
      formInitialState,
    )
  
    const { firstName, lastName, email, password } = usersDetails
  console.log(firstName)
    const reducerInputChange = (e) => {
      const { name, value } = e.target
      dispatchFormValue({ [name]: value })
    }
    const onFormSubmit = () => {
    console.log("heii")
          axios.post('https://js211-project.onrender.com/login', {
            usersDetails
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            })
    }
   
    return (
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
            <FormLabel>First name</FormLabel>
            <input  style={{width:"80%"}}
              type="text"
              name="firstName"
              value={firstName}
              onChange={reducerInputChange} />
             
          
         
              <FormLabel>Last name</FormLabel>
             <input style={{width:"80%"}}
              type="text"
              name="lastName"
              value={lastName}
              onChange={reducerInputChange} />
          
          
         
          
            <FormLabel>Email</FormLabel>
            <input style={{width:"80%"}}
              type="email"
              name="email"
              value={email}
              onChange={reducerInputChange}
            />
            
          
         
         
            <FormLabel>Password</FormLabel>
            <input style={{width:"80%"}}
              type="password"
              name="password"
              value={password}
              onChange={reducerInputChange}
            />
           </FormControl>
          
         
            <button onClick={onFormSubmit} style={{width:"20%"}} >
              <Link to="/login" style={{paddingLeft: 13, textDecoration: 'none', color:"black"}} >Sign Up</Link>
            </button>
          
          </VStack>
      </div>
      </div>
    )
  }
