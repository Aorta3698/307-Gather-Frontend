import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Forgot from "./Forgot";
import EventNew from "./EventNew";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/Login" element={<Login />} />
      <Route path="/users/signup" element={<Signup />} />
      <Route path="/users/forgot" element={<Forgot />} />
      <Route path="/events/new" element={<EventNew />} />
    </Routes>
  );
}
