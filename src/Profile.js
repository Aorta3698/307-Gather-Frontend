// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import * as React from "react";
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
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://gather-app.com/">
        Gather
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Profile() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <GroupsIcon sx={{ mr: 2 }} />
            <Typography 
              variant="h6" 
              component="div" 
              color='inherit' 
              sx={{ flexGrow: 1 }}>
              Gather
            </Typography>
            <Button color="inherit">My Events</Button>
            <Button color="inherit">Favorites</Button>
            <Button href="/profile" color="inherit">Profile</Button>
          </Toolbar>
        </AppBar>
      </Box>
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
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '10vh' }}
          >
            <Grid item>
              <Box
                component="img"
                sx={{
                  height: 350,
                  width: 350,
                  maxHeight: { xs: 350, md: 250 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="User image."
                src="images/user-image.png"
              />
            </Grid>
            <Grid item>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                My Profile
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                This will be my bio!
              </Typography>
            </Grid>
          </Grid>
        </Container>
        </Box>

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
