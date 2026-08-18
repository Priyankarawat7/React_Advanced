import React, { useState } from 'react'

function Binding() {
    const [title,setTitle]=useState('')

   const submithandle=(e)=>{
        e.preventDefault()

        console.log('Form submitted by',title); 

        setTitle('')
    }
  return (
    <div>

        {/* Two way binding  mtlb hum react ke through likhva re h input mai (Indirectly  )*/}
        <form onSubmit={(e)=>{submithandle(e)}}>
            <input type="text" value={title}                               
             onChange={(e)=>
                {console.log(e.target.value)
                    setTitle(e.target.value);
            }} placeholder='Enter you name' />
              {/* <input type="text" name="" id="" /> */}
              <button onSubmit={submithandle}>Submit</button>
        </form>

     
      
    </div>
  )
}

export default Binding
