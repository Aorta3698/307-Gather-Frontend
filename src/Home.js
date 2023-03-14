import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      </ThemeProvider>
    );
  }
}
