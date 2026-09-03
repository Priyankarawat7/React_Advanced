import React from 'react'

function NewTask() {
  return (
        <div className=' flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl'>
        <div className='flex items-center justify-between p-5'>
            <h3 className='bg-red-600 py-1 px-3 rounded-lg font-medium text-white'>High</h3>
            <h4 className='font-bold text-white'>20 Feb 2024</h4>
        </div>
        <h2 className='font-bold  ps-5 text-2xl text-white'>Make a Youtube video</h2>
        <p className='text-sm font-bold text-white ps-5 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates similique veniam nobis accusantium.</p>
      <div className='mt-4 flex justify-center'>
        <button className=' w-1/2 bg-red-500 py-2 px-2 text-sm rounded-2xl'>New Task</button>

      </div>
      </div>

  )
}

export default NewTask
