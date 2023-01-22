import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Payment = () => {
    const handlePlace=()=>{
        localStorage.removeItem("cart_data")
       
    }
  return (
    <div>
        <Navbar />
        <div id="main" style={{border:"1px solid black", margin:"12% 15%"}}>
<div id="payment_Head">
   <h2>ENTER YOUR CARD DETAILS</h2>
   <div id="myimg"><img src="https://static.zara.net/static/images/payment/payment/icon-payment-visa.svg" alt="" /></div>
</div>

<div id="details">
   <div id="left-details">
       
    <input type="number" id="cardnumber"  placeholder="Card Number" style={{borderBottom:"1px solid black",marginLeft:"20px"}}/> 
       <input type="text" id="cardnumber" placeholder="CARD NUMBER" required style={{borderBottom:"1px solid black",marginLeft:"20px"}} />
       <input type="text" id="holder" placeholder="CARD HOLDER" required style={{borderBottom:"1px solid black",marginLeft:"20px"}}/>
      
   </div>
   <div id="right-details-2" style={{marginTop:"40px"}}>
       <select type="month" id="month" placeholder="MONTH" required style={{borderBottom:"1px solid black",marginLeft:"20px"}}>
           <option value="">MONTH</option>
           <option value="JANUARY">JANUARY</option>
           <option value="FEBRUARY">FEBRUARY</option>
           <option value="MARCH">MARCH</option>
           <option value="APRIL">APRIL</option>
           <option value="MAY">MAY</option>
           <option value="JUNE">JUNE</option>
           <option value="JULY">JULY</option>
           <option value="AUGUST">AUGUST</option>
           <option value="SEPTEMBER">SEPTEMBER</option>
           <option value="OCTOBER">OCTOBER</option>
           <option value="NOVEMBER">NOVEMBER</option>
           <option value="DECEMBER">DECEMBER</option>
       </select>
       <input type="text"  placeholder="CVV" required style={{borderBottom:"1px solid black",marginLeft:"20px"}} />
   </div>
   <div >
       
       <select name="year"  required style={{borderBottom:"1px solid black",marginLeft:"20px",marginTop:"40px"}}>
           <option value="">YEAR</option>
           <option value="2022">2022</option>
           <option value="2023">2023</option>
           <option value="2024">2024</option>
           <option value="2025">2025</option>
           <option value="2026">2026</option>
           <option value="2027">2027</option>
           <option value="2028">2028</option>
           <option value="2029">2029</option>
           <option value="2030">2030</option>
           <option value="2031">2031</option>
           <option value="2032">2032</option>
           <option value="2033">2033</option>
           <option value="2034">2034</option>
           <option value="2035">2035</option>
           <option value="2036">2036</option>
           <option value="2037">2037</option>
           <option value="2038">2038</option>
           <option value="2039">2039</option>
           <option value="2040">2040</option>
       </select>
   </div>
   
</div>
</div>
<button style={{marginLeft:"40%",border:"1px solid green", width:"140px", height:"40px"}} onClick={handlePlace}><Link to="./index">Place order</Link></button>
    </div>
 
 
    
  )
}

export default Payment



