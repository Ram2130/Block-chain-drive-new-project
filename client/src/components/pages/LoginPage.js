import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../assets/images/bg.png'
import '../../App.css'
import {  useNavigate} from 'react-router-dom'
import NavBar from "../NavBar/Navbar" 
 
 
import   {firebaseConfig,app, analytics}   from "../Firebase/Firebase"; 
 
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer,toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';  
import {Context} from "../context/contextApi" 
import { useContext } from 'react'

 
 

//Initialize Firebase
 

const SignInPage= ()=> {
    const navigate = useNavigate();
    const [userName,setUserName]=useState({
        first_name:"",
        password:""

    });
    const {user,setUser}=useContext(Context)
    console.log("user of Loging page"+user);
    var name,value;
    const getData=(event)=>
    { name= event.target.name;
        value=event.target.value
        setUserName({...userName,[name]:value})
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



  const handleSubmit=async(e)=>{
    e.preventDefault();
    const auth = getAuth();
   
    signInWithEmailAndPassword(auth, userName.first_name,userName.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user.accessToken);
        sessionStorage.setItem( 'token',true );
        if(user){
console.log("loging page user"+user)           
        }
        alert(user.email+" is signed in.");
        return navigate("/home", { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
       
  }
    return (<>
    <NavBar/>
        <header style={ HeaderStyle }>
        <div style={{textAlign:"center"}}>
        <div style={{marginTop:"8%"}}>
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" value={userName.first_name} onChange={getData} name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" value={userName.password}  onChange={getData} name="password" required />
                </p>
                <p>
                    <button id="sub_btn" onClick={handleSubmit} type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
        </header>
        </>
    )
}


export default SignInPage;