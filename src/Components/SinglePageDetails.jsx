import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DefaultFooter from "./Footer";
import Navbar from "./Navbar";

function SingleUserPage() {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    let params = useParams();


    function getData(id) {
        return fetch(`https://js211-project.onrender.com/earrings/${id}`).then((res) => res.json());
    }

    const fetchHandleData = (user_id) => {
        setLoading(true);
        getData(user_id)

            .then((input) => setData(input))
            .catch((error) => setErr(true))
            .finally(() => setLoading(false));

    }
    console.log(data)

    useEffect(() => {
        fetchHandleData(params.user_id);
    }, [params.user_id])

    console.log("params", params);
    const addToCart=()=>{
      
        
       let cartData=JSON.parse(localStorage.getItem("cart_data"))||[]
       console.log("1")
       let obj={
        "id":Math.random(),
        "Price":data.Price,
        "img":data.img,
        "about":data.about
       }
       cartData.push(obj)
localStorage.setItem("cart_data", JSON.stringify(cartData));
         }
    return (
       
        <div>
             <Navbar />
      <div style={{display:"flex"}}>
      <img src={data?.img}  />
        <img src={data?.productcardImg}  />
      </div>
       
        <h3> Discounted Price:{data.DiscountedPri}</h3>
        <h3>Price :{data.Price}</h3>
         <h3>About : {data.about}</h3>
        <h3>Extra Details :{data.extraDetails}</h3>
        <hr />
        <button onClick={addToCart}><Link to="/cart">add to cart</Link></button>
        <DefaultFooter />
    </div>)
}
export default SingleUserPage;