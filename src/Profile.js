import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth0 } from "@auth0/auth0-react";

import { Copyright } from "./Copyright";
import { NavBar } from "./navBar/NavBar";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const Profile = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Profile Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>This is my bio!</span>
          </p>
          <div className="profile-grid">
            <div className="profile__header">
              <img
                src={user.picture}
                alt="Profile"
                className="profile__avatar"
              />
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profile__description">{user.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </ThemeProvider>
  );
};
