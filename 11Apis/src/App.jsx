import React from 'react'
import axios from 'axios'
import { useState } from 'react';

function App() {

  const[data,setData]=useState([])

  async function getData()
  {
 //const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
      // .then(response => response.json())
      // .then(json => console.log(json))
     // console.log(response);
      
    // const data=await response.json()
    //   console.log(data);


//Axios third party library

   const response= await axios.get('https://jsonplaceholder.typicode.com/todos/')

   console.log(response.data);

   setData(response.data)
   





//const response= fetch("https://jsonplaceholder.typicode.com/todos/1")
      
    
  }
  return (
    <div>
     <button onClick={getData}>Get Data</button>
      
      <div>
        {

          data.map(function (e,idx){
            return(
               <div key={e.id}>
              <h3>{e.id}. {e.title}</h3>
              <p>Completed: {e.completed ? 'Yes' : 'No'}</p>
            </div>

            )
            
          
            

          })}

      </div>
    </div>                         
  )
}

export default App
   