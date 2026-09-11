import React from 'react'
import { useState } from 'react'

function SearchBar() {

    const[text,setStext]=useState('')

  return (
    <div>
       <form 
       className='flex items-center gap-5 justify-around pt-10 bg-gray-800 p-10'>
        <input 
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
