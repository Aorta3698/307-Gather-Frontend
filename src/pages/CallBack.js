import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavBar } from "../navBar/NavBar";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const CallBack = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="page-layout">
        <NavBar />
        <div className="page-layout__content" />
      </div>
    </ThemeProvider>
  );
};
