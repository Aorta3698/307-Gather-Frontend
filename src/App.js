import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import { checkCredentials } from "./Requests.js";
import { addAccount } from "./Requests.js";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/users/Login" element={<Login handleSubmit={checkCredentials}/>} />
      <Route path="/users/signup" element={<Signup handleSubmit={addAccount}/>} />
    </Routes>
  );
}
