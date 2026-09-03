import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import CompleteTask from './CompleteTask';

function TaskList({data}) {

  console.log(data?.tasks);
  
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto py-5 w-full  flex flex-nowrap items-center justify-start gap-10 p-5'>
      
      {data.tasks.map((e,index)=>{
        if(e.active){
          return <AcceptTask/>
        }
        if(e.completed){
          return <CompleteTask/>

        }
        if(e.failed){
          return <FailedTask/>
        }
        else{  
          return <NewTask/>
        }
      })}
      {/* <AcceptTask/>

      <NewTask/>

      <FailedTask/>
      <CompleteTask/> */}

     

   

    </div>
  )
}

export default TaskList
