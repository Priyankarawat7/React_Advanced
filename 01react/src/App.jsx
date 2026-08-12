import React from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar';

const App = () => {
   const user="hearsh";
   const age=29
  return (
    <>
{/*      
     <div className="card">
    <h1>Hello {user}</h1>
    <h2>age is {age}</h2>
    </div> */}


    <Navbar/>

    <div className="parent">
    <Card  user='Nia' age={19}/>
    <Card user="sagar" age={21}/>
    <Card/>
    <Card/>

     </div>
    
     
    
    </>
  )
}

export default App
