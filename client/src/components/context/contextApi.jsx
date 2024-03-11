import React, { createContext, useState,useEffect } from "react";
import Upload from "../../artifacts/contracts/Upload.sol/Upload.json";
import { ethers } from "ethers";
export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  
  
   
  const [user, setUser] = useState(false);
  console.log("user of contextApi"+user);
  const [account, setAccount] = useState("65656565sczxczx");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
   
  useEffect(() => {
    const provider = new ethers.BrowserProvider(window.ethereum); //providers.web3Providers(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        //await provider.send("eth_requestAccounts",[]);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        setAccount(address);
        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const abi = Upload.abi;
        const contract = new ethers.Contract(contractAddress, abi, signer);
        setContract(contract);
        setProvider(provider);
        console.log(contract);
        console.log(provider);
        //const accounts = await provider.send("eth_accounts",[]);
      } else {
        console.error("Metamask is not connect");
      }
    };
    provider && loadProvider();
  }, []);

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        account, setAccount,
        contract, setContract,
        provider, setProvider,
        user,
        setUser,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
