import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AccountMenu from "../Profile/AccountMenu";
import {Context} from "../context/contextApi" 
import { useContext } from 'react'
 
 import Tab from 'react-bootstrap/Tab';
 import Tabs from 'react-bootstrap/Tabs';
 
 
import FileUpload from '../FileUpload';
 const NavBar =()=> {
 
  const {user,setUser}=useContext(Context)
  const token=sessionStorage.getItem("token")
  console.log(token);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">File Storage</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link >Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
           
          </Nav>
        </Container>
        <Nav>
          { token=="true"   ? <AccountMenu />:<></> }
        
        </Nav>
      </Navbar>
     
    
    </>
  );
}

export default NavBar;



// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

// function JustifiedExample() {
//   return (
//     <Tabs
//       defaultActiveKey="profile"
//       id="justify-tab-example"
//       className="mb-3"
//       justify
//     >
//       <Tab eventKey="home" title="Home">
//         Tab content for Home
//       </Tab>
//       <Tab eventKey="profile" title="Profile">
//         Tab content for Profile
//       </Tab>
//       <Tab eventKey="longer-tab" title="Loooonger Tab">
//         Tab content for Loooonger Tab
//       </Tab>
//       <Tab eventKey="contact" title="Contact" disabled>
//         Tab content for Contact
//       </Tab>
//     </Tabs>
//   );
// }

// export default JustifiedExample;