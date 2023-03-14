import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function Review(props) {
  const event = props.event;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Event summary
      </Typography>
      <List disablePadding>
        <ListItem key={event.name} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Name"} secondary={event.name} />
        </ListItem>

        <ListItem key={event.desc} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Description"} secondary={event.desc} />
        </ListItem>

        <ListItem key={event.building} sx={{ py: 1, px: 0 }}>
          <ListItemText
            primary={"Location"}
            secondary={event.building + " " + event.room}
          />
        </ListItem>
        <ListItem key={event.category} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Category"} secondary={event.category} />
        </ListItem>
      </List>
    </React.Fragment>
  );
}
