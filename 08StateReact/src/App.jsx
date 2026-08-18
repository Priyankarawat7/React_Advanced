import React, { useState } from 'react'
import Counter from './Components/Counter';
import State from './Components/State';

function App() {
  const[a,seta]=useState(20)
  const[username,setUsername]=useState("Sarthak")
  const[users,setusers]=useState([10,20,30])
  
   const changeNum=()=> {
        console.log(a);
        seta(a+5)
        console.log(a); //work Asynchronusly
        
        setUsername("Aman")

        setusers([30,40,50]) 
        
        
      }
  return (
    <div>

     
      {/* <h1>Value if a is {a}</h1>
      <h1>Value if username is {username}</h1>
      <h1>Array is {users}</h1>
      <button onClick={changeNum}>Click</button>

      <Counter/> */}
      <State/>
      

    </div>
  )
}

export default App
