import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function About() {
   const navigate= useNavigate()
  const btnClicked=()=>{
    navigate('/')
  
    console.log('button is clicked')
    

  }
  return (
    <div>
      <button onClick={()=>{
       navigate('/') }} className='bg-cyan-900 px-5 py-4 rounded m-2 cursor-pointer active:scale-95'>Return to Home page</button>
    
     <button onClick={()=>{
      navigate(-2) }} className='bg-cyan-900 px-5 py-4 rounded m-2 cursor-pointer active:scale-95'>Back</button>
    
    <h1>About</h1>
    </div>
  )
}

export default About
