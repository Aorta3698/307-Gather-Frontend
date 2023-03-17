import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./pages/Home";
import { Profile } from "./pages/Profile";
import { EventNew } from "./pages/EventNew";
import { PageLoader } from "./components/PageLoader";
import { AuthenticationGuard } from "./auth/authentication-guard";

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
