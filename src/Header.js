import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import GroupsIcon from "@mui/icons-material/Groups";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export default function Header(props) {
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
            {props.isLogin ? (
              <Button href="/" color="inherit">
                Logout
              </Button>
            ) : (
              <Button href="users/login" color="inherit">
                Login
              </Button>
            )}
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
    </div>
  );
}
