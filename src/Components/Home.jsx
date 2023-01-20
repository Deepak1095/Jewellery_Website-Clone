import { Link } from "react-router-dom";
import { HStack, Box } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
function Home() {
  return (
    <div >
        <HStack  direction={['column', 'row']} spacing="auto" margin='auto' maxW="70%">
  <Box>
  <Link style={{paddingLeft: 13, textDecoration: 'none', color:"black"}}  to="/login"> <p>login</p></Link>
  </Box>
  <Box>
  <Link style={{paddingLeft: 13, textDecoration: 'none', color:"black"}}  to="/newArrivals"> <p>New Arrivals</p></Link>
  </Box>
  <Box>
  <Link style={{paddingLeft: 13, textDecoration: 'none', color:"black"}}  to="/bracelets"><p>Bracelets</p></Link>
  </Box>
  <Box>
  <Link style={{paddingLeft: 13, textDecoration: 'none', color:"black"}}  to="/AnniversaryGifts"> <p>Anniversary Gifts</p></Link>
  </Box>
  <Box>
  <Link style={{paddingLeft: 13, textDecoration: 'none', color:"black"}} to="/solitaires"><p>Solitaires</p></Link>
  </Box>
  <Box>
  <Link style={{paddingLeft: 13, textDecoration: 'none', color:"black"}}  to="/rings"> <p>Rings</p></Link>
  </Box>
  <Box>
  <Link style={{paddingLeft: 13, textDecoration: 'none', color:"black"}}  to="/earrings"> <p>Earrings</p></Link>
  </Box>
  <Box>
  <Link style={{paddingLeft: 13, textDecoration: 'none', color:"black"}}  to="/login"> <p>Login</p></Link>
  
  </Box>
</HStack>

     
     
      
   
    
    </div>
  );
}
export default Home;