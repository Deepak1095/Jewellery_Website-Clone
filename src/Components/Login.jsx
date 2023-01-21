//import { Link,Navigate, useNavigate } from "react-router-dom";
import React from "react"
import Navbar from "./Navbar";
import axios from "axios"
import {Link} from "react-router-dom"
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

        {/* <BasicUsage /> */}
     
        <input type="email" placeholder="enter email" value={email.value} onChange={(e)=>setEmail(e.target.value)} />
<input type="password" placeholder="enter password" value={password.value} onChange={(e)=>setPassword(e.target.value)} />
<button onClick={submitButton}>submit</button>
<Link to="/signup">Sign Up page</Link>
<input type="text" placeholder="enter password" value={dl.value} onChange={(e)=>setDl(e.target.value)} />
<button onClick={()=>deleteButton(dl)}>delete</button>
<Link to="/admin">admin</Link>
      {/* <form className="form" data-testid="login-form" onSubmit={submitButton}>
        <div>
          <label>
            <input
             data-testid="email-input"
              type="email" 
              placeholder="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)} />
              
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div> */}
    </div>
    </div>
  );
}
export default Login;
