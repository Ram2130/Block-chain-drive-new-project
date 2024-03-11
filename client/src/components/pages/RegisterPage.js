import React,{useState,useEffect} from 'react'
import { Link, Router, useNavigate ,Navigate} from 'react-router-dom'
import NavBar from "../NavBar/Navbar"
import '../../App.css'
import BackgroundImage from '../assets/images/bg.png'
 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 
import { ToastContainer,toast } from 'react-toastify'; // <- add ToastContainer
import 'react-toastify/dist/ReactToastify.css'; //
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS-RxMv_erOXCn-gJNf4oTOXxni0n4zko",
  authDomain: "file-storage-system-7d654.firebaseapp.com",
  projectId: "file-storage-system-7d654",
  storageBucket: "file-storage-system-7d654.appspot.com",
  messagingSenderId: "587853766900",
  appId: "1:587853766900:web:a2bbc7fec3ba4830d37ea1",
  measurementId: "G-0L8SMKPGQ9"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 






const SignUpPage =()=> {
   const [userName,setUserName]=useState({
   first_name:"",
   email:"",
   password:""
   });
 
    const navigate = useNavigate();
   
 let name,value;

const getUserData = (event)=>
{     name=event.target.name
      value=event.target.value;
    setUserName({...userName,[name]:value})
}
const  handleSubmit=async(e)=>{
    e.preventDefault();

   
    const { first_name,email,password}=userName
 const response= await fetch("https://file-storage-system-7d654-default-rtdb.firebaseio.com/register.json",{
    method : "POST",
    headers:{
        'Content-Type':'application/json'
        },
        body:JSON.stringify({
            first_name,
            email,
            password
        })
 })
 
 console.log(response);
 setTimeout(() => {
    toast.success("Account has been created successfully.");
}, 2000);

  
 if(response){
    setUserName({first_name:"",
    email:"",
    password:""});
 
 }
const auth = getAuth();


  createUserWithEmailAndPassword(auth, userName.email, userName.password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
    alert("successfully Loging On fireBase");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
 
  if (response.status === 200) {
    alert("toast nahi chal raha h")
return navigate("/", { replace: true });  
 }
}
 
    return (<>  <NavBar/>
        <header style={ HeaderStyle }>
               <div style={{textAlign:"center"}}>
        <div    style={{marginTop:"8%"}}>
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home" method='POST'>
                <p>
                    <label>Username</label><br/>
                    <input type="text" value={userName.firstName} onChange={getUserData} name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email"  value={userName.email} onChange={getUserData} name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password"  value={userName.password} onChange={getUserData} name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" onClick={ handleSubmit} type="submit">Register</button>
                    <ToastContainer />

                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
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
export default  SignUpPage