import React from 'react'
import { Link } from 'react-router-dom'

function Kids() {
  return (
    <div className='flex justify-center gap-10 py-4'>
  <Link className='text-xl font-semibold' to='/product/men'>Men</Link>
       <Link className='text-xl font-semibold' to='/product/women'>Women</Link>
          <Link className='text-xl font-semibold' to='/product/kids'>Kids</Link>
      
    </div>
  )
}

export default Kids
