import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ImageUploader from "./ImageUploader";
import Copyright from "./Copyright";
import LocationForm from "./LocationForm";
import Review from "./Review";
import Header from "./Header";
import { addEvent } from "./Events";

const steps = ["Event Details", "Event Photos", "Review Event"];

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function getStepContent(step, func, event) {
  switch (step) {
    case 0:
      return <LocationForm handleChange={func} event={event} />;
    case 1:
      return <ImageUploader event={event} />;
    case 2:
      return <Review event={event} />;
    default:
      throw new Error("Unknown step");
  }
}

export const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const [event, setEvent] = React.useState({
    name: "",
    description: "",
    location: "",
    category: "",
    date: "",
    // hardcode these for now
    verified: false,
    hostId: "63fc355766c988cd3251b0ee",
    gps: [-122.5, 37.7],

    // backend does not have this
    images: "",
  });

  const handleChange = (input) => {
    const value = input.target.value;
    setEvent({
      ...event,
      [input.target.name]: value,
    });
  };

  const setDate = () => {
    setEvent({
      ...event,
      date: new Date().toLocaleString(),
    });
  };

  const handleNext = () => {
    console.log(event);
    setDate();
    setActiveStep(activeStep + 1);
    if (activeStep + 1 == steps.length) {
      addEvent(event);
    }
  };

  const handleBack = () => {
    setDate();
    setActiveStep(activeStep - 1);
  };

  const confirmation = () => {
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Your Event has been added!
        </Typography>
        <Typography variant="subtitle1">
          We have emailed a confirmation that your event has been added. Thank
          you for using Gather!
        </Typography>
      </React.Fragment>
    );
  };

  const showForm = () => {
    return (
      <React.Fragment>
        {getStepContent(activeStep, handleChange, event)}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
              Back
            </Button>
          )}

          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 3, ml: 1 }}
          >
            {activeStep === steps.length - 1 ? "Add Event" : "Next"}
          </Button>
        </Box>
      </React.Fragment>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Add an Event
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? confirmation() : showForm()}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
};
