import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";

import { getAllEvents } from "./Events";

import Map from "./Map";
import Copyright from "./Copyright";
import Header from "./Header";
import EventCards from "./EventCards";
import HeroUnit from "./HeroUnit";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function AddEventButton() {
  return (
    <Fab
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
        <Header />
        <main>
          <HeroUnit />
          <Map />
          <EventCards events={this.state.events} />
        </main>
        <Copyright />
        <AddEventButton />
      </ThemeProvider>
    );
  }
}
