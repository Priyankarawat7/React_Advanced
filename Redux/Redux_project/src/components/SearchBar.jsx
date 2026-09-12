import React from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

function SearchBar() {


  //const search=useSelector((state)=> state.value)
  const dispatch=useDispatch()

    const[text,setStext]=useState('')
    
    const submitHandler=(e)=>{
      e.preventDefault()

      //console.log('form submitted',text)
      dispatch(setQuery(text))

      setStext('')
      

    }

  return (
    <div>
       <form  onSubmit={(e)=>{
        submitHandler(e)
      }}
       className='flex items-center gap-5 justify-around pt-10 bg-gray-800 p-10'>
        <input 
        value={text}
        onChange={(e)=>{
          setStext(e.target.value)
          console.log(e.target.value);
          
        }}
         className='w-full border-2 py-2 px-3 outline'
          type="text" 
          placeholder='Search anything....' 
          required
          />
        <button 
        
        className='py-2 px-6 active:scale-95
         bg-white text-gray-950 rounded-2xl
          cursor-pointer'
        >
        Search
        </button>

       </form>
      
    </div>
  )
}

export default SearchBar
