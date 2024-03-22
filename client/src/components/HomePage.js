import React from 'react'
import { Link } from 'react-router-dom'
import SecurityIcon from './icons/SecurityIcon'

function HomePage() {
  return (
<>
    <div class="area">
  
        <ul class="circles">
        <div className="flex flex-col justify-center items-center min-h-screen  ">
         <SecurityIcon className="w-5 h-5"  />
    <div className="text-2xl lg:text-5xl font-black pb-10 lg:pb-20 ">Admin Security App </div>
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