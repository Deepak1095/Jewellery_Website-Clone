import { Link } from "react-router-dom";
import { HStack, Box } from '@chakra-ui/react'
function Home() {
  return (
    <div >
        <HStack  direction={['column', 'row']} spacing="auto" margin='auto' maxW="70%">
  <Box>
  <Link style={{paddingLeft: 13, textDecoration: 'none'}}   to="/login"><p>Login</p></Link>
  </Box>
  <Box>
  <Link style={{paddingLeft: 13, textDecoration: 'none'}}  to="/newArrivals"> <p>New Arrivals</p></Link>
  </Box>
  <Box>
  <Link style={{paddingLeft: 13, textDecoration: 'none'}}  to="/bracelets"><p>Bracelets</p></Link>
  </Box>
  <Box>
  <Link style={{paddingLeft: 13, textDecoration: 'none'}}  to="/AnniversaryGifts"> <p>Anniversary Gifts</p></Link>
  </Box>
  <Box>
  <Link style={{paddingLeft: 13, textDecoration: 'none'}}  to="/solitaires"><p>Solitaires</p></Link>
  </Box>
  <Box>
  <Link style={{paddingLeft: 13, textDecoration: 'none'}}  to="/rings"> <p>Rings</p></Link>
  </Box>
  <Box>
  <Link style={{paddingLeft: 13, textDecoration: 'none'}}  to="/earrings"> <p>Earrings</p></Link>
  </Box>
</HStack>
     
     
     
      
   
    
    </div>
  );
}
export default Home;