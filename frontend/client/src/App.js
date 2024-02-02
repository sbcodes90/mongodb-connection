import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/signup" element={<SignUpForm username={username} password={password} email={email} setUsername={setUsername} setPassword={setPassword} setEmail={setEmail}/>} />
        <Route path="/login" element={<LoginForm username={username} password={password} setUsername={setUsername} setPassword={setPassword} />} />
        <Route path="/welcome" element={<WelcomePage username={username} />} />

      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
