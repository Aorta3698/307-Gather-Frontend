import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import { checkCredentials } from "./Requests.js";
import { addAccount } from "./Requests.js";
import ResetPass from "./ResetPass";
import EventNew from "./EventNew";

export default function App() {
  const [person, setPerson] = useState({
    verified: false,
    _id: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (input) => {
    const value = input.target.value;
    setPerson({
      ...person,
      [input.target.name]: value,
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Home person={person} />} />
      <Route path="/Profile" element={<Profile person={person} />} />
      <Route
        path="/users/Login"
        element={<Login handleSubmit={checkCredentials} person={person} />}
      />
      <Route
        path="/users/signup"
        element={
          <Signup
            handleSubmit={addAccount}
            person={person}
            handleChange={handleChange}
          />
        }
      />
      <Route path="/users/reset-pass" element={<ResetPass person={person} />} />
      <Route path="/events/new" element={<EventNew person={person} />} />
    </Routes>
  );
}
