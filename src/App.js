import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import ResetPass from "./ResetPass";
import EventNew from "./EventNew";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/Login" element={<Login />} />
      <Route path="/users/signup" element={<Signup />} />
      <Route path="/users/reset-pass" element={<ResetPass />} />
      <Route path="/events/new" element={<EventNew />} />
    </Routes>
  );
}
