import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import LoadingScreen from './LoadingScreen';

function LoginForm({ username, password, setUsername, setPassword }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    axios
      .post("http://localhost:4000/login", { username, password })
      .then(response => {

        setTimeout(() => {
           setUsername("")
           setPassword("")
          setIsLoading(false)
        }, 1000);
        if(response.data) {
          localStorage.setItem("auth-token", response.data)
        return navigate(`/welcome/${username}`)}
        else {
        return  navigate('/')
        }
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response)
          setTimeout(() => {
            setIsLoading(false)
          }, 5000);         
          // setUsername("")
          //setPassword("")
          setErrors(true)
        }
      });
  };

  return (
    <>
      {!isLoading &&
        <div className="bg-gradient-to-r from-teal-200 via-teal-500  to-teal-800 h-screen px-[20px] lg:px-[150px] py-20">
          <div className="bg-white rounded-3xl lg:mt-[80px] mx-auto max-w-screen-sm px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">Log In</h1>
            </div>

            <form action="post" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <div>
                <label className="sr-only">
                  Username
                </label>

                <div className="relative">
                  <input
                    type="email"
                    className={`w-full rounded-lg ${errors ? 'border-red-500' : 'border-gray-200'} p-4 pe-12 text-md shadow-md border-3`}
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors && <p className="text-red-500 mt-2">Invalid Username</p>}
                </div>
              </div>

              <div>
                <label className="sr-only">
                  Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    className={`w-full rounded-lg ${errors ? 'border-red-500' : 'border-gray-200'} p-4 pe-12 text-md shadow-md border-3`}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors && <p className="text-red-500 mt-2">Invalid Password</p>}
                </div>
              </div>
              <div className="flex items-center justify-center pt-5">
                <button
                  type="submit"
                  className="inline-block rounded-lg bg-teal-600 px-10 py-3 text-md font-medium text-white"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      }
      {isLoading &&
        <LoadingScreen message="Logging In..." />
      }
    </>
  )
}

export default LoginForm