import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import FailureIcon from "./icons/FailureIcon";

function WelcomePage() {
  const { username } = useParams();

  const [token, setToken] = useState({});

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth-token");
    navigate("/");
  };

  useEffect(() => {
    const saved = localStorage.getItem("auth-token");
    setToken(saved);
  }, []);

  return (
    <>
      <div
        className={
           `bg-teal-500 min-h-screen text-center`
           
        }
      >
        <div className="flex flex-col items-center pt-[200px] lg:inline-flex lg:mt-[100px]">
          <div
            className={
              
                "font-bold text-3xl text-white"
                
            }
          >
            {token ? (
              <div>Welcome! {username}</div>
            ) : (
              "Looks like you need a token please login."
            )}
          </div>
          {token && (
            <div className="flex justify-center">
              <Link
                to={ token ? "/userlist" : "/"}
                className="bg-teal-300 text-black px-20 py-5 rounded-lg font-bold mt-20 mr-10"
              >
                Admin
              </Link>
              <button
                onClick={logout}
                className="border-white border-2 text-white px-20  py-5 rounded-lg font-bold mt-20"
              >
                Logout
              </button>
            </div>
          )}
          <div className="pt-10">{!token && <FailureIcon />}</div>
        </div>
        {!token && (
          <div className="flex space-x-6 justify-center pt-[50px]">
            <Link
              to="/login"
              className="py-[20px] px-20  mb-2 text-lg font-medium text-white focus:outline-none rounded-lg border-white border-2 focus:z-10 focus:ring-2 focus:ring-blue-400"
            >
              Login
            </Link>   
          </div>
        )}
      </div>
    </>
  );
}

export default WelcomePage;
