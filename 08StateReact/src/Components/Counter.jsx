import React, { useState } from 'react'

function Counter() {
    const[num,setNum]=useState(0);

    function IncreaseNum()
    {
        console.log('Increasing');
        setNum(num+1)
        
    }

    function decreaseNum()
    {
        console.log('decreasing');
        setNum(num-1)

    }
    function jumpNum()
    {
        setNum(num+5)
    }

  return (
    <div className='counter'>

        <h1>{num}</h1>
        <button onClick={IncreaseNum}>Increase </button>
        <button onClick={decreaseNum}>Decrease</button>
        <button onClick={jumpNum}>Jump by 5</button>
      
    </div>
  )
}

export default Counter
