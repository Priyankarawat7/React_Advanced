
import React, { use, useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/Authprovider'






function App() {

const [user,setUser]=useState(null)
const[loggedinUserData,setLoggedinUserData]=useState()

const authdata=useContext(AuthContext)
//console.log(authdata);

 useEffect(()=>{
//   if(authdata)
//   {
    const loggedInUser=localStorage.getItem('loggedInUser')
    console.log(loggedInUser);
    
     if(loggedInUser)
     {
      const userData=JSON.parse(loggedInUser)
//       setUser(JSON.parse(loggedInUser))
      setUser(userData.role)
      setLoggedinUserData(userData.role)
      
      
    }
//   }
 },[authdata])


const handleLogin=(email,password)=>{
  const admin =authdata.admin.find((e)=>email==e.email && e.password==password )


  if(admin){
  
    //console.log('this is admin',email,password);
    setUser({role:'admin'})
    localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
    
    return
  }

  const employee=authdata.employees.find((e)=>email==e.email && e.password==password )
   // console.log('this is user',email,password);
  if(employee)
      {
        setUser({role:'employee'}) 
        setLoggedinUserData(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({role:"employee",data:employee}))
  return
  }
  
    alert('Invalid');
  
}

  return (
    <>
     {!user ?<Login handleLogin={handleLogin}/>:''}

     {user?.role =='admin' && <AdminDashboard />}

     {user?.role=='employee' && <EmployeeDashboard  data={loggedinUserData}/>}
    </>
  )
}

export default App
