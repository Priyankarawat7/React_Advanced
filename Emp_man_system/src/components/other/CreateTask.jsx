import React from 'react'

function CreateTask() {
  return (
    <>
        <div className="mt-20">
       

        <form className='w-[400px] h-full min-h-[600px] max-w-md mx-auto flex flex-col gap-4 p-5  bg-emerald-700 rounded-2xl'>
          <h1 className='text-3xl font-medium text-center'>Create task</h1>
          <div className='flex flex-col'>
            <label  htmlFor="" className='text-xl'>Task Title</label>
            <input className='py-2 px-10 rounded-lg mt-2 bg-emerald-100' type="text" placeholder='Make a UI design'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="" className='text-xl'>Description</label>
            <textarea className='py-6 px-10 rounded-lg mt-2 bg-emerald-100' placeholder='Detailed description of task [Max 500 word]'></textarea>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="" className='text-xl'>Date</label>
            <input className='py-2 px-10 rounded-lg mt-2 bg-emerald-100' type="date"   />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="" className='text-xl'>Assign To</label>
            <input className='py-2 px-10 rounded-lg mt-2 bg-emerald-100' type="text" name="" id="" />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="" className='text-xl'>Category</label>
            <input className='py-2 px-10 rounded-lg mt-2 bg-emerald-100' type="text" placeholder='Design ,Developement,etc..'/>
          </div>

          <button className='py-2 bg-emerald-800 mt-5 rounded-lg text-white text-xl'>Create task</button>
         

        </form>

      </div>
      
    </>
  )
}

export default CreateTask
