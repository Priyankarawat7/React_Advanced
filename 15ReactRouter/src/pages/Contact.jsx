import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='flex justify-center gap-10 py-4'>

      <Link className='text-xl font-semibold' to='/product/men'>Men</Link>
      <Link className='text-xl font-semibold' to='/product/women'>Women</Link>
         <Link className='text-xl font-semibold' to='/product/kids'>Kids</Link>
        <h1>Product</h1>
      
    </div>
  )
}

export default Contact
