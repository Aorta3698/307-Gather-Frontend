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

import Map from "./Map";

import React, { Component } from "react";
import { getAllEvents } from "./Events";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://gather-5411b.web.app">
        Gather
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
        <CssBaseline />
        <AppBar position="relative">
          {/* Header */}
          <Toolbar>
            <GroupsIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              Gather
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Gather
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                This is the place where you can find events to attend, host new
                events, and meet new people.
              </Typography>
            </Container>
          </Box>

          {/* Map */}
          <Map />

          {/* Event Cards */}
          <Container sx={{ py: 5 }} maxWidth="md">
            <Grid container spacing={4}>
              {this.state.events.map((event, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                      }}
                      image="images/event.png"
                      alt="event discription"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {event.name}
                      </Typography>
                      <Typography>{event.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" variant="outlined">
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
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
