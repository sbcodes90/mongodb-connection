import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function WelcomePage() {

  const { username } = useParams();

  const [token, setToken] = useState({})

  useEffect(() => {

    const saved = localStorage.getItem("auth-token");
    setToken(saved)
 
  }, [])

  console.log('token', token)
  
  return (
    <div className="bg-teal-500 text-center h-screen">
      <div className="font-bold text-5xl text-white pt-20">Welcome! {username} </div>
      <div className="pt-20 text-white text-2xl">Lets create your profile!</div>
      <div className="flex justify-center">
        <div className="bg-white w-[800px] h-[400px] mt-10 rounded-lg border-teal-200 border-[20px]">
          { token && 'Private Profile Information:  Example'}
        </div>
        </div>
      </div>

  )
}

export default WelcomePage