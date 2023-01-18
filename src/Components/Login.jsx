//import { Link,Navigate, useNavigate } from "react-router-dom";
import React from "react"
import Navbar from "./Navbar";
// import { AuthContext } from "../Context/AuthContext";


function Login() {
//   const [email,setEmail]=React.useState("")
//   const [password,setPassword]=React.useState("")
//    const {authState,loginUser}=React.useContext(AuthContext)
  
//   const submitButton=async(e)=>{
//     e.preventDefault()
//     try{
//      let res=await fetch("https://reqres.in/api/login",{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify(
//         {email,password}
//       )
     
//     })

//     res=await res.json()
//    loginUser(res.token)
//   }
//   catch(err){
//     console.log(err)
//   }
//   }
//   if(authState.isAuth){
//     return <Navigate to="/dashboard"/>
//   }
  
   
  
  return (
    <div className="login-page">
<Navbar />
        <h1>kel</h1>
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
  );
}
export default Login;
