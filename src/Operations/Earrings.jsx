import React from 'react'
import Navbar from '../Components/Navbar'
import axios from "axios"
import { SimpleGrid,Box } from '@chakra-ui/layout'
import LoadingIndicator from '../Components/LoadingIndicator'
import { Pagination } from '../Components/Pagination'
import {Link} from "react-router-dom"
import Footer from '../Components/Footer'
const Earrings = () => {
const [product,setProduct]=React.useState([])
const [loading,setLoading]=React.useState(true)
const [page,setPage]=React.useState(1)
const [toggle,setToggle]=React.useState(false)
const data=(page=1)=>{
  axios.get(`https://js211-project.onrender.com/earrings?_limit=12&_page=${page}`)
  .then((res)=>setProduct(res.data),
  setLoading(false))
  .catch((err)=>console.log(err))
  }
 
 React.useEffect(()=>{
  setLoading(true)
  data(page)
 },[page])
 const sortLH=()=>{
     product.sort(function(a,b){
          return a.Price-b.Price
        })
     console.log(product)
        setToggle(!toggle)
     }
     const sortHL=()=>{
          product.sort(function(a,b){
               return b.Price-a.Price
             })
          console.log(product)
             setToggle(!toggle)
          }

     React.useEffect(()=>{

     },[toggle])

 return (loading)?(<LoadingIndicator />):( 
  <>
        <Navbar />
        <button onClick={sortLH}>sort low to high</button>
        <br />
        <button onClick={sortHL}>sort high to low</button>
   <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",margin:"4% 0% 5% 20%"}} >
       {product?.map(function(item){
return  <div key={item.id} style={{marginBottom:"4%",textAlign:"center"}}>
         <img src={item.img} style={{width:"80%"}} />
         <h3>Price :{item.Price}</h3>
         <h3>About : {item.about}</h3>
         <Link to={`/earrings/${item.id}`}>more info</Link>
        </div>
        })
       }
       </div>
       <Pagination 
     
        current={page}
        onChange={(page)=>setPage(page)}
        />
       <Footer />
  </>
 ) 
}
export default Earrings