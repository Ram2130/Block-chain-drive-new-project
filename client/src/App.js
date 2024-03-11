import logo from './logo.svg';
import './App.css';
import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import LandingPage from './components/pages/LandingPage';
import "./App.css";
 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
 
import {AppContext} from "./components/context/contextApi"
  

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
//    useEffect(()=>{ 
//     const provider =  new ethers.BrowserProvider(window.ethereum) //providers.web3Providers(window.ethereum);
   

//  const loadProvider =async()=>{
//   if(provider){ 
//     //await provider.send("eth_requestAccounts",[]);
//     const signer =await provider.getSigner()
//     const address = await signer.getAddress();

//     window.ethereum.on("chainChanged", () => {
//       window.location.reload();
//     });

//     window.ethereum.on("accountsChanged", () => {
//       window.location.reload();
//     });


//     setAccount(address);
//     const contractAddress ="0x5FbDB2315678afecb367f032d93F642f64180aa3";
//     const abi = Upload.abi;
//     const contract = new ethers.Contract(contractAddress,abi,signer);
//     setContract(contract);
//     setProvider(provider)
//     console.log(contract);
//     console.log(provider);
//     //const accounts = await provider.send("eth_accounts",[]);
    
//   }else{
//     console.error("Metamask is not connect");
//   }
//  }
//   provider && loadProvider();
// },[])

  return (
    <> 
    <AppContext>
    <BrowserRouter>
    <div>
        <Routes>
            {/* <Route exact path="/" component={ <LandingPage/> } /> */}
            <Route path="/login" element={ <LoginPage/> } />
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/register" element={ <RegisterPage/>} />
            <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
            <Route path="/home" element={ <HomePage/> } />
            <Route path="/fileUpload" element={ <FileUpload/>  } />
        </Routes>
        <Footer />
    </div>
</BrowserRouter>
</AppContext>
</>
    // <div className="App">
    //   <div className="App">
        
    //     <h1 style={{ color: "white" }}>Gdrive 3.0</h1>
    //     <div class="bg"></div>
    //     <div class="bg bg2"></div>
    //     <div class="bg bg3"></div>

    //     <p style={{ color: "white" }}>
    //       Account : {account ? account : "Not connected"}
    //     </p>
    //     <FileUpload
    //       account={account}
    //       provider={provider}
    //       contract={contract}
    //     ></FileUpload>
    //     <Display contract={contract} account={account}></Display>
    //   </div>
    // </div>
    
  );
}
const Footer = () => {
  return (
       <p className="text-center" style={ FooterStyle }>Designed & coded by <a href="https://izemspot.netlify.com" target="_blank" rel="noopener noreferrer">IZEMSPOT</a></p>
  )
}

const FooterStyle = {
  background: "#222",
  fontSize: ".8rem",
  color: "#fff",
  position: "contents",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5"
}
export default App;
