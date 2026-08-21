import React, { useEffect, useState } from 'react'
import Effect from './components/Effect'

function App() {

//   const[num,setNum]=useState(0)

//   const[num2,setNum2]=useState(0)

//   useEffect(function()
// {
//   console.log("use effect is run 1");
  
// },[num]) //yh 
  //random()
  return (
    <div>
      {/* <h1>value {num}</h1>

      <h1>value {num2}</h1>

      <button onMouseEnter={()=>{

        setNum(num+1)
          }}

        onMouseLeave={()=>{

          setNum2(num2+10)

        }}> Click

      </button> */}
      <Effect/>
     
      
    </div>
  )
}

export default App
