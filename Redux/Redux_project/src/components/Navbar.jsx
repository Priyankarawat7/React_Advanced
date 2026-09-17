import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <div className='flex justify-between p-3 pt-5    bg-[var(--c1)]'>
            <Link to='/' className='text-2xl font-medium'>MediaSearch</Link>
            <div className='flex gap-5 items-center text-xl '>
                 <Link className='py-1 px-3 bg-[var(--c4)] text-gray-900 rounded active:scale-95 ' to='/'>Search</Link>
                 <Link className='py-1 px-3 bg-[var(--c4)] text-gray-900 rounded active:scale-95 '  to='/collection'>Collection</Link>

            </div>
           
    </div>
  )
}

export default Navbar
