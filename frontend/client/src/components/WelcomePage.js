import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import SheildIcon from "./icons/SheildIcon";

function WelcomePage() {
  const { username } = useParams();

  const [token, setToken] = useState({});

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth-token");
    navigate('/')
  };

  useEffect(() => {
    const saved = localStorage.getItem("auth-token");
    setToken(saved);
  }, []);

  return (
    <>
      <div className={token ? `bg-teal-500 min-h-screen text-center` : `bg-gray-300 min-h-screen text-center`}>
        <div className="flex flex-col items-center pt-[200px] lg:inline-flex lg:mt-[100px]">
          <div className={token ? "font-bold text-3xl text-white" : "font-bold lg:text-3xl text-red-600"}>
            {token
              ? `Welcome! ${username}`
              : "Whoops! Not Authorized Token Required"
            }
          </div>
          {token && <button onClick={logout} className="bg-teal-300 text-black px-10 py-5 rounded-lg font-bold mt-20">Logout</button>}
          <div className="pt-10">{!token && <SheildIcon />}</div>
        </div>
        {!token && <div className="flex space-x-6 justify-center pt-[50px]">
          <Link to="/login" className="py-2.5 px-10 me-2 mb-2 text-sm font-medium text-black focus:outline-none rounded-lg border-black border-2 focus:z-10 focus:ring-2 focus:ring-blue-400">Login</Link>
          <Link to="/signup" className="py-2.5 px-9 me-2 mb-2 text-sm font-medium text-black focus:outline-none rounded-lg border-black border-2 focus:z-10 focus:ring-2 focus:ring-blue-400">Sign Up</Link>
        </div>}
      </div>
    </>
  );
}

export default WelcomePage;
