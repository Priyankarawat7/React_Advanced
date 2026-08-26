import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex items-center justify-between bg-blue-300 text-blue-950 text-[18px]'>
        <h3 className='text-xl font-medium'>Sheryians</h3>

        <div className='flex gap-20 items-center justify-between p-5'>
            
            <Link to='/' className='text-lg font-medium'>Home</Link>
            <Link to='/about' className='text-lg font-medium'>About</Link>
            <Link to='/product' className='text-lg font-medium'>Product</Link>
              <Link to='/courses' className='text-lg font-medium'>Courses</Link>

        </div>
      
    </div>
  )
}

export default Navbar
