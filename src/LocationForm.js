import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const AddressForm = (props) => {
  const categories = [
    "Academics",
    "Sale",
    "Sporting",
    "Performing Arts",
    "Social Gathering",
  ];

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
            defaultValue={props.event.name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="location"
            name="location"
            label="Location"
            fullWidth
            variant="standard"
            onChange={props.handleChange}
            defaultValue={props.event.location}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            fullWidth
            variant="standard"
            onChange={props.handleChange}
            defaultValue={props.event.description}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="category">Category</InputLabel>
            <Select
              id="category"
              name="category"
              label="Category"
              defaultValue={props.event.category}
              onChange={props.handleChange}
            >
              <MenuItem value={categories[0]}>{categories[0]}</MenuItem>
              <MenuItem value={categories[1]}>{categories[1]}</MenuItem>
              <MenuItem value={categories[2]}>{categories[2]}</MenuItem>
              <MenuItem value={categories[3]}>{categories[3]}</MenuItem>
              <MenuItem value={categories[4]}>{categories[4]}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
