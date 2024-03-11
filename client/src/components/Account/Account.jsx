import React from 'react'
import {Context} from "../context/contextApi" 
import { useContext } from 'react'
import BgColorExample from '../Card/card'
 const Account =()=> {
    const {user,setUser,account}=useContext(Context)
  return (
    <> <BgColorExample account={account}/>
     
    </>
  )
}

export default Account