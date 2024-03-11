import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import SignInPage from "./LoginPage";
import '../../App.css'
import BackgroundImage from '../assets/images/bg.png'
import Modal from "../Modal";
import NavBar from "../NavBar/Navbar"
import { useContext } from 'react'
import {Context} from "../context/contextApi"
 const LandingPage=()=> {
    const [modalOpen, setModalOpen] = useState(false);
    const {user,setUser,account,contract}=useContext(Context)
    return (<> 
    <NavBar/>
        <header style={ HeaderStyle }>
        
            {!user ?<> <h1 className="main-title text-center">File Storage</h1>
             <p className="main-para text-center">join us now and don't waste time</p> 
                <div className="buttons text-center">
                <Link to="/login">
             <button  className="primary-button">log in</button>
                </Link>
                 <Link to="/register">
                        <button className="primary-button" id="reg_btn"><span>register </span></button>
                    </Link>
                
                </div></>:<></>}
        </header>
        </>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overFlow:"hidden"
    
}

export default LandingPage;