import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './components/Card';

function App() {

  const[userData,setUserData]= useState('')

  const[index,setIndex]=useState(1)

  const getData=async ()=>{

  const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)

  console.log(response.data);

  setUserData(response.data)
  
  //   axios.post('https://picsum.photos/v2/list?page=2&limit=10',{username:"priyanka",password:"priyanka07"},)
  
  // //for Update
  //   axios.patch()
  //   axios.delete()
      
  }

  useEffect(function()
{
  getData()

},[index])

  let printUserData=<h3 className=' absolute text-4xl top-1/2 left-70 translatex-1/2'>Loading....</h3>

  if(userData.length>0){
    printUserData=userData.map(function(e,id){

     return <div key={id}>
      <Card e={e}/> 
     </div>
      
      
    })

  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
     {/* <button onClick={getGata}
      className='bg-green-600 mt-3
        px-4 py-2 mb-3 active:scale-95 rounded
         text-white'>
          Get Data
          </button> */}
          {/* <h1 className='fixed'>{index}</h1> */}

          <div className='flex gap-10 flex-wrap '>
          {printUserData}

          </div>

          <div className='flex justify-center items-center gap-7 p-4'>
            <button 
            className='bg-amber-400 cursor-pointer
             active:scale-95 text-black
              rounded px-4 py-2
               font-medium'
               onClick={()=>{
               if(index>1)
               {
                setUserData([])
                setIndex(index-1)
               }
                // console.log(index-1);
                
               }}>
              Prev
              
            </button>

            <h4>page {index}</h4>
            <button className='bg-amber-400 cursor-pointer
             active:scale-95 text-black 
             rounded px-4 py-2 
             font-medium'
               onClick={()=>{

                setUserData([])
                setIndex(index+1)
              //  console.log(index+1);
               }}>
              next
             </button>
          </div>
    </div>
  )
}

export default App
