import React from 'react'

function LoginForm({ username, password, setUsername, setPassword}) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('username', username, 'password', password)
  }

  return (
    <div className="bg-gradient-to-r from-teal-200 via-teal-500  to-teal-800 h-screen px-[20px] lg:px-[150px] py-20"> 
    <div className="bg-white rounded-3xl lg:mt-[50px] mx-auto max-w-screen-sm px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Log In</h1>
      </div>

      <form action="post" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label for="username" className="sr-only">
            Username
          </label>

          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-md shadow-md"
              placeholder="Create username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label for="password" className="sr-only">
            Password
          </label>

          <div className="relative">
            <input
              type="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-md shadow-md"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
  )
}

export default LoginForm