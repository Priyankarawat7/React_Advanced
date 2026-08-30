import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between text-white'>
      
      <h1 className='text-xl font-semibold'>Hello <br/> <span className='text-2xl font-semibold'>priyanka✋</span></h1>

      <button className='py-2 px-3 font-medium bg-emerald-900  rounded-lg'>Log Out</button>

          
    </div>
  )
}

export default Header
