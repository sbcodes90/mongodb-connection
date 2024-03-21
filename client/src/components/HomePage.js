import React from 'react'
import { Link } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/24/solid'
import SecurityIcon from './icons/SecurityIcon'

function HomePage() {
  return (
<>
    <div class="area">
  
        <ul class="circles">
        <div className="flex flex-col justify-center items-center min-h-screen  ">
          <SecurityIcon />
    <div className="text-3xl lg:text-5xl font-black pb-20 ">Admin Security App <LockClosedIcon className='w-10 h-10 inline-block mt-[-10px]' color='black' /></div>
    <div className=' space-y-10  lg:space-x-10 lg:space-y-0 flex flex-col justify-center items-center lg:flex-row'>
    <Link className='border-teal-200 border-4  px-[65px] lg:px-20 py-5 rounded-lg font-bold text-xl' to="/login">Login</Link>
    <Link className='border-teal-200 border-4  px-[60px] lg:px-20 py-5 rounded-lg font-bold text-xl'  to="/signup">Sign Up</Link>
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

export default HomePage