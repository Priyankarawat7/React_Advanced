import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

function Authprovider({ children }) {

 

  const [userdata, setUserData] = useState({
    employees: [],
    admin: []
  })

  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage()

    setUserData({
      employees,
      admin
    })
  }, [])

  return (
    <AuthContext.Provider value={userdata}>
      {children}
    </AuthContext.Provider>
  )
}

export default Authprovider