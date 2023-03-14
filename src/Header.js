import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import GroupsIcon from "@mui/icons-material/Groups";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <GroupsIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Gather
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
