import React, { useEffect, useState } from 'react'

function Effect() {

  const[a,setA]=useState(0)
   const[b,setB]=useState(0)

  function aChanging()
  {
    console.log('A ki value Change');
    
  }
   function bChanging()
  {
    console.log("B ki value Change");  
  }

  useEffect(function()
  {
    console.log('running...');

    aChanging()
    
  },[])
  return (
    <div>

      <h1>A is {a}</h1>
       <h1>B is {b}</h1>

      <button onClick={()=>{
        setA(a+1)
      }}>Change A</button>

       <button onClick={
        ()=>{
          setB(b+10)
        }
       }>Change B</button>
      

    </div>
  )
}

export default Effect
