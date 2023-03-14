import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import GroupsIcon from "@mui/icons-material/Groups";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { Component } from "react";

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

        {/* Footer */}
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Made by Cal Poly students for Cal Poly SLO in CSC 307.
          </Typography>
          <Copyright />
        </Box>
      </ThemeProvider>
    );
  }
}
