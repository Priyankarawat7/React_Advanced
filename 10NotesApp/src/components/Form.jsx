import React, { useState } from 'react'

function Form() {

  const [title,setTitle] = useState('')
  const[details,setDetails]=useState('')
  const[task,setTask]=useState([])


  const SubmitHandle = (e) => {
    e.preventDefault()
    //console.log(title,details);
    // console.log('Form submitted')
    const CopyTask=[...task]

    CopyTask.push({title,details})
    console.log(CopyTask);
    
    setTask(CopyTask)

    setTitle('')
    setDetails('')
   
  }

  const deleteNotes=(idx)=>{

   // console.log('delete notes');
    const copyTask=[...task];

     copyTask.splice(idx,1);
     setTask(copyTask)
                       
    // console.log(idx);
    
    // console.log(copyTask[idx]);
    
     

    

  }

  return (
    <div className='min-h-screen bg-black text-white lg:flex'>

      {/* LEFT - FORM */}
      <div className='w-full lg:w-1/2 p-6 sm:p-10 lg:p-14'>
        <h1 className='text-3xl font-bold mb-2'>
          Create a Note
        </h1>

        <p className='text-gray-400 mb-8'>
          Add your task and keep your notes organized.
        </p>

        <form
          onSubmit={(e) => SubmitHandle(e)}
          className='flex flex-col gap-5'
        >

          <input
            className='w-full py-3 px-5 bg-transparent border border-gray-600 outline-none rounded-xl focus:border-white transition'
            type='text'
            placeholder='Enter task heading'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
              //console.log(e.target.value);
              
            }}
          />

          <textarea
            className='w-full h-40 py-3 px-5 bg-transparent border border-gray-600 outline-none rounded-xl resize-none focus:border-white transition'
            placeholder='Enter details'
            value={details}
             onChange={(e)=>{
              setDetails(e.target.value)
             // console.log(e.target.value);
              
             }}
          />

          <button
            type='submit'
            className='active:bg-amber-500 w-full bg-white text-black py-3 px-5 rounded-xl font-semibold hover:bg-gray-200 transition'
          >
            Add Note
          </button>

        </form>
      </div>


      {/* RIGHT - NOTES */}
      <div className='w-full lg:w-1/2 p-6 sm:p-10 lg:p-14 border-t lg:border-t-0 lg:border-l border-gray-800'>

        <h2 className='text-2xl font-semibold mb-6'>
          Your Notes
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'>

         
             {task.map(function(el,idx){

              return  <div   key={idx}
  className="h-50 relative  text-black rounded-2xl  p-6 shadow-lg bg-white flex  flex-col
  "
>
   <div>
    <h3 className="font-bold text-lg mb-2">
      {el.title}
    </h3>

    <p className="text-gray-700 font-medium text-sm break-words">
      {el.details}
    </p>
              </div>
    <button onClick={()=>
      deleteNotes(idx)}
       className='mt-auto self-center cursor-pointer active:scale-95  bg-red-500 py-2 text-1xl text-white px-9 rounded-full'>Delete</button>
  </div>
     
             })}

          
        

        

        </div>

      </div>

    </div>
  )
}

export default Form