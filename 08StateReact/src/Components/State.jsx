import React, { useState } from 'react'

function State() {
    const [num,setNum]=useState({user:"Sarthak",age:20})
    const[n,setN]=useState(10);
    const [arr,setArr]=useState([10,20,30])

    const btnClicked=()=>{

        // To update
        const newNum={...num}
        newNum.user='Aman'
        setNum(newNum)
        console.log(newNum );

        setNum(prev=>({...prev,age:50}))

        const newArr=[...arr]
        newArr.push(40)
        setArr(newArr)
        console.log(newArr);


        // setN(n+1); //it incr one by one 
        // setN(n+1);
        // setN(n+1);


        setN(prev=>(prev+1))
        setN(prev=>(prev+1))
        setN(prev=>(prev+1)) //Like jitne setNum is exist utna jump krke age bdega
     
        
        

    }
  return (
    <div>
        <h1>{num.user},{num.age},{arr} ,{n}</h1>
        <button onClick={btnClicked}>Click</button>
      
    </div>
  )
}

export default State
