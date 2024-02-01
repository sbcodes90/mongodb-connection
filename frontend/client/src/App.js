import axios from "axios";
import react, { useState } from "react";
import SignUpForm from "./components/SignUpForm";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="bg-teal-400 h-screen px-[20px] lg:px-[150px] py-20">
      <SignUpForm username={username} password={password} email={email} setUsername={setUsername} setPassword={setPassword} setEmail={setEmail}/>  
    </div>
  );
}

export default App;
