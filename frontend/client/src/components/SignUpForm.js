import React from "react";
import axios from "axios";

function SignUpForm({
  username,
  password,
  email,
  setUsername,
  setPassword,
  setEmail,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/users", { username, password, email })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-white rounded-3xl">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Sign Up</h1>
        </div>

        <form action="post" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label for="username" className="sr-only">
              Username
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
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
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label for="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <a className="underline font-medium text-black" href="">
                Login
              </a>
            </p>

            <button
              type="submit"
              className="inline-block rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
