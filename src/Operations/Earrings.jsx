import React from 'react'
import Navbar from '../Components/Navbar'
import axios from "axios"
import { SimpleGrid,Box } from '@chakra-ui/layout'
const Earrings = () => {
const [product,setProduct]=React.useState([])
 React.useEffect(()=>{
  const data=(page=1)=>{
  axios.get(`https://js211-project.onrender.com/earrings?_limit=12&_page=${page}`)
  .then((res)=>setProduct(res.data))
  .catch((err)=>console.log(err))
  }
  data()
 },[])

  return (
    <div>
        <Navbar />
    <div>Earrings</div>
    
       
       {product?.map(function(item){
return <div key={item.id}>
    <img src={item.img} />
  <h3>Price :{item.Price}</h3>
<h3>About : {item.about}</h3>
       
</div>

       })}
       </div>
 )
  
   
  
}

export default Earrings

// Discounted-Price
// : 
// "7,962"
// Price
// : 
// "8,333"
// about
// : 
// "BESTSELLER"
// extra-details
// : 
// "Marquise Gold Drop Earrings"
// id
// : 
// 1
// img
// : 
// "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95//U/E/UE04647-1Y0000_12_listhover.jpg"
// productcard-frontimage
// : 
// "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95//U/E/UE04647-1Y0000_11_listfront.jpg"