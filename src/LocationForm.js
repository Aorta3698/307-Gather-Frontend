import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function AddressForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Event Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Event Name"
            fullWidth
            variant="standard"
            onChange={props.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="building"
            name="building"
            label="Building Name"
            fullWidth
            variant="standard"
            onChange={props.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="room"
            name="room"
            label="Room Number"
            fullWidth
            variant="standard"
            onChange={props.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="desc"
            name="desc"
            label="Description"
            fullWidth
            variant="standard"
            onChange={props.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="category">Category</InputLabel>
            <Select
              id="category"
              name="category"
              label="Category"
              defaultValue=""
              onChange={props.handleChange}
            >
              <MenuItem value={"Academics"}>Academics</MenuItem>
              <MenuItem value={"Sale"}>Sale</MenuItem>
              <MenuItem value={"Sporting"}>Sporting</MenuItem>
              <MenuItem value={"Performing Arts"}>Performing Arts</MenuItem>
              <MenuItem value={"Social Gathering"}>Social Gathering</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
