import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import GroupsIcon from "@mui/icons-material/Groups";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import LogoutButton from "./LogoutButton";
import Tab from "./Tab";

export default function Header() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton href="/" style={{ backgroundColor: "transparent" }}>
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
            {!isAuthenticated && (
              <>
                <SignupButton />
                <LoginButton />
              </>
            )}
            {isAuthenticated && (
              <>
                <LogoutButton />
              </>
            )}
            {isAuthenticated && (
              <>
                <Tab path="/events" label="My Events" />
                <Tab path="/favorites" label="Favorites" />
                <Tab path="/profile" label="Profile" />
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
