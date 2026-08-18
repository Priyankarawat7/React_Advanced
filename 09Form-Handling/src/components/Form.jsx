import React from 'react'

function Form() {

    const submithandle=(e)=>{
        e.preventDefault()

        console.log('Form submitted'); //default behavior ko control krne ke 
        //liye preventDefault ka use krte h
        
    }
  return (
    <div>
        <form onSubmit={(e)=>{submithandle(e)}}>
            <input type="text" name="" id="" placeholder='Enter you name' />
              {/* <input type="text" name="" id="" /> */}
              <button onSubmit={submithandle}>Submit</button>
        </form>

        {/* Abhi yh jitna bhi likha hai vo direct likha hai 
        to control this thing we use two ways binding */}
      
    </div>
  )
}

export default Form
