import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import { checkCredentials } from "./Requests.js";
import { addAccount } from "./Requests.js";
import ResetPass from "./ResetPass";
import EventNew from "./EventNew";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route
        path="/users/Login"
        element={<Login handleSubmit={checkCredentials} />}
      />
      <Route
        path="/users/signup"
        element={<Signup handleSubmit={addAccount} />}
      />
      <Route path="/users/reset-pass" element={<ResetPass />} />
      <Route path="/events/new" element={<EventNew />} />
    </Routes>
  );
}
