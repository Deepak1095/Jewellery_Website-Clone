import React from 'react'
import Navbar from '../Components/Navbar'
import axios from "axios"
import LoadingIndicator from '../Components/LoadingIndicator'
import { Pagination } from '../Components/Pagination'
import Footer from '../Components/Footer'
const Solitaires = () => {
const [product,setProduct]=React.useState([])
const [loading,setLoading]=React.useState(true)
const [page,setPage]=React.useState(1)
const data=(page=1)=>{
  axios.get(`https://js211-project.onrender.com/solitaires?_limit=12&_page=${page}`)
  .then((res)=>setProduct(res.data),
  setLoading(false))
  .catch((err)=>console.log(err))
  }
 React.useEffect(()=>{
  setLoading(true)
  data(page)
 },[page])

 return (loading)?(<LoadingIndicator />):( 
  <>
        <Navbar />
   <div data-testid="restaurants-container" style={{display:"grid", gridTemplateColumns:"repeat(3,1fr"}} >
       {product?.map(function(item){
return  <div key={item.id}>
         <img src={item.img} />
         <h3>Price :{item.Price}</h3>
         <h3>About : {item.about}</h3>
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
export default Solitaires