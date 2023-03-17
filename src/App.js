import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./Home";
import { Profile } from "./Profile";
import { EventNew } from "./EventNew";
import { PageLoader } from "./PageLoader";
import { AuthenticationGuard } from "./authentication-guard";

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
      <Route
        path="/Profile"
        element={<AuthenticationGuard component={Profile} />}
      />
      <Route
        path="/events/new"
        element={<AuthenticationGuard component={EventNew} />}
      />
    </Routes>
  );
}
