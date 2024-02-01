import axios from "axios";
import react, { useState } from "react";
import SignUpForm from "./components/SignUpForm";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="bg-teal-400 h-screen px-[150px] py-20">
      {/* <div className="flex flex-col h-[500px] justify-center bg-white rounded-3xl">
        <p className="text-2xl font-bold mt-10 text-center">Sign Up</p>
        <div className="w-full">
          <form method="post" className="px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                valie={email}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-teal-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Create User
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-black"
                href="#"
              >
                Log in
              </a>
            </div>
          </form>
        </div>
      </div> */}
      <SignUpForm username={username} password={password} email={email} setUsername={setUsername} setPassword={setPassword} setEmail={setEmail}/>
      
    </div>
  );
}

export default App;
