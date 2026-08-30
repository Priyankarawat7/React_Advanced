import React, { useState } from 'react'

function Login() {

 const [email, setEmail]= useState('')
 const [password, setPassword]= useState('')

  const SubmitHandle=(e)=>{

    e.preventDefault()

    console.log('form submit',email,password);

    setEmail('')
    setPassword('')
    
    
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center '>
      
      <div className="p-12 border-2 border-emerald-700 rounded-xl">
      <form onSubmit={(e)=>{
          SubmitHandle(e)

         }} action="" 
         className='flex flex-col gap-5 '>
        <input
        value={email}
         onChange={(e)=>{
         setEmail(e.target.value)

         console.log(e.target.value);
         
          
        }} required 
        className='border-emerald-700 border-2 
        rounded-full py-2 px-15 text-lg text-white
         outline-none  placeholder:text-gray-500'
          type="email" 
           placeholder='Enter your Email'
            />
         <input
            value={password}
         onChange={(e)=>{
         setPassword(e.target.value)
         console.log(e.target.value)
         }}
         required 
         className='border-emerald-700 text-white
          outline-none border-2 rounded-full py-2 
          px-15 text-lg placeholder:text-gray-500'
          type="password" name="" id="" 
          placeholder='Enter your password'/>

         <button  className='bg-emerald-700
          mt-10 py-2 px-20 text-xl rounded-full
           text-white'>
            Log in
            </button>

      </form>
      </div>
    </div>
  )
}

export default Login
