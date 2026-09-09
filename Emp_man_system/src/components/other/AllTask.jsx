
import React, { useContext } from 'react'
import { AuthContext } from '../../context/Authprovider'

function AllTask() {

  const [userdata,setUserData] = useContext(AuthContext)

  console.log(userdata.employees)

  return (
    <div className='bg-[#1c1c1c] rounded-xl p-5 h-1/2 mt-10 
    '>

      {/* Header */}
      <div className='grid grid-cols-5 gap-4 bg-[#252525] text-gray-400 px-5 py-3 rounded-lg mb-3 text-sm font-medium'>

        <h2>Employee Name</h2>

        <h3 className='text-center'>
          New Task
        </h3>

        <h3 className='text-center'>
          Active Task
        </h3>

        <h3 className='text-center'>
          Completed
        </h3>

        <h3 className='text-center'>
          Failed
        </h3>

      </div>


      {/* Employees */}
      <div className='h-[calc(100%-60px)] overflow-y-auto space-y-3'>

        {userdata.employees.map((e, index) => {

          return (
            <div
              key={index}
              className='grid grid-cols-5 items-center bg-[#252525] hover:bg-[#303030] transition-all duration-200 rounded-lg px-5 py-4 text-white'
            >

              {/* Employee */}
              <div className='flex items-center gap-3'>

                <div className='w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-semibold'>
                  {e.name?.charAt(0).toUpperCase()}
                </div>

                <h2 className='font-medium'>
                  {e.name}
                </h2>

              </div>


              {/* New Task */}
              <div className='text-center'>
                <span className='bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold'>
                  {e.taskCount.newTask}
                </span>
              </div>


              {/* Active Task */}
              <div className='text-center'>
                <span className='bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold'>
                  {e.taskCount.active}
                </span>
              </div>


              {/* Completed */}
              <div className='text-center'>
                <span className='bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold'>
                  {e.taskCount.completed}
                </span>
              </div>


              {/* Failed */}
              <div className='text-center'>
                <span className='bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold'>
                   {e.taskCount.failed}
                </span>
              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}

export default AllTask
