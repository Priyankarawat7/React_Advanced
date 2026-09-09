import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Authprovider'

function CreateTask() {

   const [userdata,setUserData] = useContext(AuthContext)

  const[taskTitle,setTaskTitle]=useState('')
  const[taskDesc,setTaskDesc]=useState('')
  const[taskdate,setTaskDate]=useState('')
  const[assignto,setAssignto]=useState('')
  const[category,setCategory]=useState('')

    const[task,setTask]=useState({})
    const submitHandler=(e)=>{
      e.preventDefault()
       //console.log("Task Created",taskTitle,taskDesc,taskdate,assignto,category);
    const newTask=
    {
     title: taskTitle,
  description: taskDesc,
  date: taskdate,
  category: category,
  active: false,
  newTask: true,
  completed: false,
  failed: false
    }
    setTask(newTask)
    console.log(newTask);

   //const data=JSON.parse(localStorage.getItem('employees'))
  const data=userdata.employees

 // console.log(data);
  
   //console.log(data);


   data.forEach((e)=>{

    if(assignto.toLowerCase()==e.name.toLowerCase()){    
     // console.log('aagya',data);
     e.tasks.push(newTask)
     e.taskCount.newTask=e.taskCount.newTask+1
     e.taskCount.total += 1;

    }

   })

    setUserData({...userdata,employees:data})

   console.log(data);
   

   localStorage.setItem('employees',JSON.stringify(data))

   setTaskTitle('')
   setTaskDesc('')
   setTaskDate('')
   setCategory('')
   setAssignto('')
   
     
      
      
    }
  return (

    <>
        <div className="mt-20">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='w-[400px] h-full min-h-[600px] max-w-md mx-auto flex flex-col gap-4 p-5  bg-emerald-700 rounded-2xl'>
          <h1 className='text-3xl font-medium text-center'>Create task</h1>
          <div className='flex flex-col'>
            <label  htmlFor="" className='text-xl'>Task Title</label>
            <input 
            value={taskTitle}
            onChange={(e)=>{
              setTaskTitle(e.target.value)
            }}
            className='py-2 px-10 rounded-lg mt-2 bg-emerald-100'
            type="text" 
            placeholder='Make a UI design'
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="" className='text-xl'>Description</label>
            <textarea
            value={taskDesc}
              onChange={(e)=>{
              setTaskDesc(e.target.value)
            }}
             className='py-6 px-10 rounded-lg mt-2 bg-emerald-100' 
             placeholder='Detailed description of task [Max 500 word]'>

            </textarea>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="" className='text-xl'>Date</label>
            <input
            value={taskdate}
              onChange={(e)=>{
              setTaskDate(e.target.value)
            }}
             className='py-2 px-10 rounded-lg mt-2 bg-emerald-100' type="date"   />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="" className='text-xl'>Assign To</label>
            <input
            value={assignto} 
              onChange={(e)=>{
              setAssignto(e.target.value)
            }}
            className='py-2 px-10 rounded-lg mt-2 bg-emerald-100' type="text" name="" id="" />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="" className='text-xl'>Category</label>
            <input 
            value={category}
              onChange={(e)=>{
              setCategory(e.target.value)
            }}
            className='py-2 px-10 rounded-lg mt-2 bg-emerald-100' type="text" placeholder='Design ,Developement,etc..'/>
          </div>

          <button className='py-2 bg-emerald-800 mt-5 rounded-lg text-white text-xl'>Create task</button>
         

        </form>

      </div>
      
    </>
  )
}

export default CreateTask
