import {React,useRef,useEffect,useState} from 'react'
import {Link} from "@chakra-ui/react"
import axios from "axios"
import Navbar from "./Navbar"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,Button,useDisclosure,SimpleGrid,Input
} from '@chakra-ui/react'
const Admin = () => {
    const [state,setState]=useState("")
    const val=useRef("")
    const data=(details)=>{
        axios.get(`https://js211-project.onrender.com/${details}`)
        .then(res=>console.log(res.data))
        }
    
useEffect(()=>{
    data(state)
},[state])
function PostModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}  style={{width:"260px",height:"50px",fontSize:"20px"}}>Add New Product</Button>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent maxH="400px" maxW="500px" marginLeft="45%"  marginTop="9%" >
          <ModalHeader >Post Request</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
         <SimpleGrid columns={1} spacing={10}>
         <Input placeholder='Enter Product Name' style={{height:"50px"}} />
         <Input placeholder='Enter Price' style={{height:"50px"}} />
         <Input placeholder='Enter Discounted Price' style={{height:"50px"}} />
         <Input placeholder='Enter Image URL' style={{height:"50px"}} />
  <select name="" id="" style={{height:"50px",marginTop:"-10px"}}>
  <option value="">Choose Category</option>
          <option value="">Earring</option>
          <option value="">Bracelets</option>
         </select>
</SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
 
function DeleteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}  style={{width:"260px",height:"50px",fontSize:"20px"}}>Delete Product</Button>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent maxH="400px" maxW="500px" marginLeft="45%"  marginTop="17%">
          <ModalHeader >Delete Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
         <SimpleGrid columns={1} spacing={10}>
         <Input placeholder='Enter id' style={{height:"50px"}} />
        
</SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
function UpdateModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}  style={{width:"260px",height:"50px",fontSize:"20px"}}>Update Product</Button>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent maxH="400px" maxW="500px" marginLeft="45%"  marginTop="17%">
          <ModalHeader >Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
         <SimpleGrid columns={1} spacing={10}>
         <Input placeholder='Enter ID' style={{height:"50px"}} />
         <Input placeholder='Enter New Price' style={{height:"50px"}} />
</SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
function ViewModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}  style={{width:"260px",height:"50px",fontSize:"20px"}}>View Product</Button>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent maxH="400px" maxW="500px" marginLeft="45%"  marginTop="17%">
          <ModalHeader >Please Enter The product ID</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
         <SimpleGrid columns={1} spacing={10}>
         <Input placeholder='Enter id' style={{height:"50px"}} />
        
</SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
    
    
    
   
  return (
   <div>
    <Navbar />
    <div style={{margin:"11% 20%" }}>
  <PostModal />
  <br />
  <DeleteModal />
<br />
  <UpdateModal />
  <br/>
  <ViewModal />
  </div>
  </div>
  )
}

export default Admin