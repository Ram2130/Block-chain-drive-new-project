import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import NavBar from "../NavBar/Navbar"
import BackgroundImage from '../assets/images/bg.png'
import { getAuth, signOut } from "firebase/auth";
import { useContext } from 'react'
import {Context} from "../context/contextApi"
import {   useNavigate } from 'react-router-dom' 
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FileUpload from '../FileUpload';
import Display from '../Display';
import Account from '../Account/Account';
import Modal from '../Modal';
export default function HomePage() {
  const [modalOpen,setModalOpen]=useState(false)
    const navigate = useNavigate();
    const {user,setUser,account,contract}=useContext(Context)
    console.log("home page user"+user);
    const token = sessionStorage.getItem("token");
    const HeaderStyle = {
        width: "100%",
        height: "100vh",
        background: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overFlow:"hidden"
        
    }
 
    return (
        <> <NavBar/>
        <header style={ HeaderStyle }>
       {token=="true" ?<> 
       {console.log(user)}
        <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
      style={{backgroundColor:"black"}}
    > 
     {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}
      <Tab  style={{color:"white"}}  eventKey="home" title="Account">
        <Account/>
       
      </Tab>
      
      <Tab    eventKey="profile" title="Upload">
      <FileUpload account={account} contract ={contract}/>
      </Tab> 
      <Tab  eventKey="longer-tab" title="Get">
        <Display  contract={contract} account={account}/>
      </Tab>
      <Tab eventKey="contact" title="Contact"  >
        
      </Tab>
    </Tabs> 
   
        </>:<>{navigate("/", { replace: true })}</>}
       </header>
        </>
    )
}