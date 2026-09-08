import React from 'react'

function CompleteTask({data}) {
   console.log(data);
  return (
   
      <div className=' flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl'>
        <div className='flex items-center justify-between p-5'>
            <h3 className='bg-red-600 py-1 px-3 rounded-lg font-medium text-white'>{data.category}</h3>
            <h4 className='font-bold text-white'>{data.date}</h4>
        </div>
        <h2 className='font-bold  ps-5 text-2xl text-white'>{data.title}</h2>
        <p className='text-sm font-bold text-white ps-5 mt-5'>{data.description}</p>
     
        <div className='mt-4 flex justify-center'>
            <button className='w-1/2 bg-red-500 py-2 px-2 text-sm rounded-2xl'>Completed</button>

        </div>
      </div>
  )
}

export default CompleteTask
