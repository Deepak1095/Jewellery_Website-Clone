import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
 import NewArrivals from "../Operations/NewArrivals"
import Bracelets from "../Operations/Bracelets"
import AnniversaryGifts from "../Operations/AnniversaryGifts"
import Solitaires from "../Operations/Solitaires"
import Rings from "../Operations/Rings"
import Earrings from "../Operations/Earrings"
import Admin from "./Admin"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
 
function AllRoutes() {
  return( <div>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/login/*" element={<Login />}/> 
  <Route path="/newArrivals/*" element={<NewArrivals />}/>
  <Route path="/anniversaryGifts/*" element={<AnniversaryGifts />}/>
  <Route path="/solitaires/*" element={<Solitaires />}/>
  <Route path="/rings/*" element={<Rings />}/> 
  <Route path="/earrings/*" element={<Earrings />}/> 
  <Route path="/bracelets/*" element={<Bracelets />}/>
  <Route path="/signup/*" element={<SignUp />}/>
  <Route path="/signin/*" element={<SignIn />}/>
  <Route path="/admin/*" element={<Admin />}/>

 
</Routes>

</div>);
}

export default AllRoutes;