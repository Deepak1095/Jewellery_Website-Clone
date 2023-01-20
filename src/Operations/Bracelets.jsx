import React from 'react'
import Navbar from '../Components/Navbar'
import axios from "axios"
import { SimpleGrid,Box } from '@chakra-ui/layout'
import LoadingIndicator from '../Components/LoadingIndicator'
import { Pagination } from '../Components/Pagination.jsx'
const Bracelets = () => {
const [product,setProduct]=React.useState([])
const [loading,setLoading]=React.useState(true)
const [page,setPage]=React.useState(1)

const data=(page)=>{
  axios.get(`https://js211-project.onrender.com/bangles-bracelets?_limit=9&_page=${page}`)
  .then((res)=>setProduct(res.data),
  setLoading(false))
  .catch((err)=>console.log(err))
  }
  
 React.useEffect(()=>{
  setLoading(true)
  data(page)
 },[page])
console.log(page)
 return (loading)?(<LoadingIndicator />):( 
  <>
        <Navbar />
        <Pagination 
        current={page}
        onChange={(page)=>setPage(page)}
        />

   <div data-testid="restaurants-container" style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", border:"1px solid red",width:"67%",marginLeft:"28%"}} >
  
       {product?.map(function(item){
return  <div key={item.id} style={{margin:"10px",border:"1px red solid"}}>
    
         <img style={{width:"100%"}} src={item.img} />
         <h3>Price :{item.Price}</h3>
         <h3>About : {item.about}</h3>
        </div>
        })
       }
       </div>
       <div style={{display:"flex", margin:"auto"}}> 
      

       </div>
  </>
 ) 
}

export default Bracelets