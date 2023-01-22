import { border } from '@chakra-ui/react';
import React from 'react'
import {Link} from "react-router-dom"
import Navbar from './Navbar';

const Cart = () => {
    let cartData=JSON.parse(localStorage.getItem("cart_data"))||[]
    let totalCart=cartData.length;

  function deletebtn(id){
    cartData.splice(id,1)
   localStorage.setItem("cart_data", JSON.stringify(cartData));
   window.location.reload ()
   }
   let Price=0
   function price(data){
       data.forEach(function(el){
           Price=Price+Number(el.Price)
           console.log(Price)
            return Price
       })
   }
   
   
  return (
    <div>
        <Navbar />
        <button style={{margin:"2% 80%",width:"140px"}}><Link to="/earrings">Contiune Shopping</Link></button>
        <br />
        <h1>Total Item : {totalCart}</h1>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}} >
         {cartData?.map(function(item){
         return  <div key={item.id} style={{border:"1px solid black",width:"70%",marginLeft:"10%"}}>
         <img src={item.img}  style={{width:"70%"}} />
         <h3>Price :{item.Price}</h3>
         <h3>About : {item.about}</h3>
         <button onClick={() => {deletebtn( item.id) }} style={{border:"1px solid black"}}>
            Delete
          </button>
          {price(cartData)}
         </div>
         })}
         </div>
         <button style={{width:"70px",border:"1px solid green",margin:"2% 40%"}}><Link to="/payment">Payment</Link></button>
    </div>
  )
}

export default Cart