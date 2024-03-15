import React from 'react'
import { Link } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/24/solid'

function NewWelcomePage() {
  return (
<>
    <div class="area">
  
        <ul class="circles">
        <div className="flex flex-col justify-center items-center min-h-screen  ">
    <div className="text-5xl font-black pb-20 ">Admin Security App <LockClosedIcon className='w-10 h-10 inline-block mt-[-10px]' color='black' /></div>
    <div className='space-x-10'>
    <Link className='border-teal-200 border-4  px-20 py-5 rounded-lg font-bold text-xl' to="/login">Login</Link>
    <Link className='border-teal-200 border-4  px-20 py-5 rounded-lg font-bold text-xl'  to="/signup">Sign Up</Link>
    </div>
    </div> 
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
     
    </div>
    </>
  )
}

export default NewWelcomePage