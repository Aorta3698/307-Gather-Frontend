import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

export default function ImageUploader(props) {
  const handleChange = (event) => {
    props.event.images = event.target.files;
  };
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label" onChange={handleChange}>
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        onChange={handleChange}
      >
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </Stack>
  );
}
