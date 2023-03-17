import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import { getAllEvents } from "./Events";
import { NavBar } from "./navBar/NavBar";
import Map from "./Map";
import Copyright from "./Copyright";
import EventCards from "./EventCards";
import HeroUnit from "./HeroUnit";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function NewEventButton() {
  return (
    <Fab
      href="/events/new"
      color="primary"
      aria-label="add"
      style={{
        position: "fixed",
        bottom: theme.spacing(4),
        right: theme.spacing(4),
        margin: theme.spacing.unit,
      }}
    >
      <AddIcon />
    </Fab>
  );
}

export default class Home extends Component {
  state = { events: [] };

  componentDidMount() {
    getAllEvents().then((data) => {
      const events = data;
      this.setState({ events });
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <NavBar />
        <main>
          <HeroUnit />
          <Map />
          <EventCards events={this.state.events} />
        </main>
        <Copyright />
        <NewEventButton />
      </ThemeProvider>
    );
  }
}
