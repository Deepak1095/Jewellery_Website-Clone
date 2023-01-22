import {React,useRef,useEffect,useState,useReducer} from 'react'
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
    const [linkDetails,setLinkDetails]=useState("")
    //const val=useRef("")
   
    









const val = useRef("");
const val1 = useRef("");
const val2 = useRef("");
const init = [];
const reducer = (state, { type, payload ,payload1,payload2}) => {
  switch (type) {
    case "ADD": {
      return [
        ...state,
        {  "extra-details":payload,
          "Price":payload1,
          "img": payload2 ,

         }
      ];
    }
    default:
      return state;
  }
};
const [state, dispatch] = useReducer(reducer, init);
console.log(state)
const data=(details)=>{
  axios.post(`https://js211-project.onrender.com/${details}`,{
    "img":val.current.value
  })
  .then(res=>console.log(res.data))
  }

const deleteData=(id)=>{
  axios.delete(`https://js211-project.onrender.com/earrings/${id}`)
}


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
         <Input placeholder='Enter Image URL' style={{height:"50px"}} ref={val} />
         <Input placeholder='Enter Price' style={{height:"50px"}} ref={val1} />
         <Input placeholder= 'Enter Product Name' style={{height:"50px"}} ref={val2}/>
  <select name="" id="" style={{height:"50px",marginTop:"-10px"}} value={linkDetails} onChange= 
         {(e)=>setLinkDetails(e.target.value)}>
          <option value="">Choose Category</option>
          <option value="earrings">Earring</option>
          <option value="bangles-bracelets">Bracelets</option>
         </select>
</SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => {
         // dispatch({ type: "ADD", payload: val.current.value,payload1: val1.current.value,payload2: val2.current.value  });
         data(linkDetails)
        }}>
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
         <Input placeholder='Enter id' style={{height:"50px"}} ref={val}/>
        
</SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={(() => {
          deleteData(val.current.value)})
         
        } >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
console.log(val)
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
    
    <Navbar style={{color:"white"}} />
 
    
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