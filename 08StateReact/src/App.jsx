import React, { useState } from 'react'
import Counter from './Components/Counter';

function App() {
  const[a,seta]=useState(20)
  const[username,setUsername]=useState("Sarthak")
  const[users,setusers]=useState([10,20,30])
  
   function changeNum() {
        console.log('Hello');
        seta(30)
        setUsername("Aman")

        setusers([30,40,50])
        
        
      }
  return (
    <div>

     
      {/* <h1>Value if a is {a}</h1>
      <h1>Value if username is {username}</h1>
      <h1>Array is {users}</h1>
      <button onClick={changeNum}>Click</button> */}

      <Counter/>
      

    </div>
  )
}

export default App
