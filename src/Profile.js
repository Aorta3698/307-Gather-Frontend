import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import GroupsIcon from "@mui/icons-material/Groups";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Copyright from "./Copyright";

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
            <IconButton href="/home" style={{ backgroundColor: "transparent" }}>
              <GroupsIcon sx={{ mr: 2 }} />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              color="inherit"
              sx={{ flexGrow: 1 }}
            >
              Gather
            </Typography>
            <Button color="inherit">My Events</Button>
            <Button href="/favorites" color="inherit">
              Favorites
            </Button>
            <Button href="/profile" color="inherit">
              Profile
            </Button>
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
              style={{ minHeight: "10vh" }}
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

      <Copyright />
    </ThemeProvider>
  );
}
