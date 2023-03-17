import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import ResetPass from "./ResetPass";
import EventNew from "./EventNew";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/users/Login" element={<Login />} />
      <Route path="/users/signup" element={<Signup />} />
      <Route path="/users/reset-pass" element={<ResetPass />} />
      <Route path="/events/new" element={<EventNew />} />
    </Routes>
  );
}
