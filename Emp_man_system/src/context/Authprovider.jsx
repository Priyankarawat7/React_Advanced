import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthContext =createContext()

function Authprovider({children}) {

   const[userdata,setUserdata]= useState(null)

   

    useEffect(()=>{
    const {employees,admin}=getLocalStorage()

    setUserdata({employees,admin })

    },[])
 


  return (
        <AuthContext.Provider value={userdata}>
            {children}

        </AuthContext.Provider>

    
  )
}

export default Authprovider
