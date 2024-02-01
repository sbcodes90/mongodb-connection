import axios from "axios";
import react, { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import { Outlet } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { Routes, Route } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (

   /*  <div className="bg-gradient-to-r from-teal-200 via-teal-500  to-teal-800 h-screen px-[20px] lg:px-[150px] py-20">
     <Outlet />
      <SignUpForm username={username} password={password} email={email} setUsername={setUsername} setPassword={setPassword} setEmail={setEmail}/>
    </div> */

    <Routes>
    <Route path="/" element={<SignUpForm />} />
    <Route path="/login" element={<LoginForm />} />
  </Routes>



  );
}

export default App;
