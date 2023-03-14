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
        Event Summary
      </Typography>
      <List disablePadding>
        <ListItem key={event.name} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Name"} secondary={event.name} />
        </ListItem>

        <ListItem key={event.description} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Description"} secondary={event.description} />
        </ListItem>

        <ListItem key={event.location} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Location"} secondary={event.location} />
        </ListItem>
        <ListItem key={event.category} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Category"} secondary={event.category} />
        </ListItem>
      </List>
    </React.Fragment>
  );
}
