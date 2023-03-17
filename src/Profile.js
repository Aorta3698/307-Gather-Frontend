import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth0 } from "@auth0/auth0-react";

import Copyright from "./Copyright";
import Header from "./Header";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Profile() {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
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
                  alt="User image"
                  src={user.picture}
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
                  {user.name}
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
