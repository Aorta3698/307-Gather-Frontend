import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import Forgot from "./Forgot";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/users/Login" element={<Login />} />
      <Route path="/users/signup" element={<Signup />} />
      <Route path="/users/forgot" element={<Forgot />} />
    </Routes>
  );
}
