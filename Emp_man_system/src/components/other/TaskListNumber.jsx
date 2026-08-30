import React from 'react'

function TaskListNumber() {
  return (
    <div className='flex flex-wrap justify-between p-10 gap-5 screen'>

        <div className='h-35 w-60 bg-blue-400 flex flex-col justify-center gap-8 text-4xl p-5 rounded-lg '>
           <h1 className='font-medium text-white'>0</h1>
           <h2 className='font-bold text-white'>New Task</h2>
        </div>

          <div className='h-35 w-60 bg-red-400 flex flex-col justify-center gap-8 text-4xl p-5 rounded-lg '>
           <h1 className='font-medium text-white'>0</h1>
           <h2 className='font-bold text-white'>New Task</h2>
        </div>

          <div className='h-35 w-60 bg-green-400 flex flex-col justify-center gap-8 text-4xl p-5 rounded-lg '>
           <h1 className='font-medium text-white'>0</h1>
           <h2 className='font-bold text-white'>New Task</h2>
        </div>

          <div className='h-35 w-60 bg-yellow-400 flex flex-col justify-center gap-8 text-4xl p-5 rounded-lg '>
           <h1 className='font-medium text-white'>0</h1>
           <h2 className='font-bold text-white'>New Task</h2>
        </div>
      
    </div>
  )
}

export default TaskListNumber
