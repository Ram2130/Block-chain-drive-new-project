import logo from './logo.svg';
import './App.css';
import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
//import Modal from "./components/Modal";
import "./App.css";


  

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
   useEffect(()=>{ 
    const provider =  new ethers.BrowserProvider(window.ethereum) //providers.web3Providers(window.ethereum);
   

 const loadProvider =async()=>{
  if(provider){ 
    //await provider.send("eth_requestAccounts",[]);
    const signer =await provider.getSigner()
    const address = await signer.getAddress();

    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", () => {
      window.location.reload();
    });


    setAccount(address);
    const contractAddress ="0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const abi = Upload.abi;
    const contract = new ethers.Contract(contractAddress,abi,signer);
    setContract(contract);
    setProvider(provider)
    console.log(contract);
    console.log(provider);
    //const accounts = await provider.send("eth_accounts",[]);
    
  }else{
    console.error("Metamask is not connect");
  }
 }
  provider && loadProvider();
},[])

  return (
    <div className="App">
      <div className="App">
        <h1 style={{ color: "white" }}>Gdrive 3.0</h1>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>

        <p style={{ color: "white" }}>
          Account : {account ? account : "Not connected"}
        </p>
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
        <Display contract={contract} account={account}></Display>
      </div>
    </div>
  );
}

export default App;
