
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/Authprovider'



function App() {

  const [user, setUser] = useState(null)

  const authdata = useContext(AuthContext)

  useEffect(() => {

    if (authdata) {

      const loggedInUser = JSON.parse(
        localStorage.getItem('loggedInUser')
      )

      if (loggedInUser) {
        setUser(loggedInUser.role)
      }

    }

  }, [authdata])


  const handleLogin = (email, password) => {

    // ADMIN LOGIN
    if (email === "admin@me.com" && password === "123") {

      console.log("this is admin")

      setUser("admin")

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin"
        })
      )

    }

    // EMPLOYEE LOGIN
    else if (
      authdata &&
      authdata.employees.find(
        (e) => email === e.email && password === e.password
      )
    ) {

      console.log("this is employee")

      setUser("employee")

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee"
        })
      )

    }

    else {
      alert("Invalid")
    }
  }


  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && <AdminDashboard />}

      {user === "employee" && <EmployeeDashboard />}
    </>
  )
}

export default App
