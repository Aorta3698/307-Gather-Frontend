import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import PhotoForm from "./PhotoForm";
import Copyright from "./Copyright";
import LocationForm from "./LocationForm";
import Review from "./Review";
import Header from "./Header";

const steps = ["Event Details", "Event Photos", "Review Event"];

function getStepContent(step, func, event) {
  switch (step) {
    case 0:
      return <LocationForm handleChange={func} />;
    case 1:
      return <PhotoForm handleChange={func} />;
    case 2:
      return <Review event={event} />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const [event, setEvent] = React.useState({
    name: "",
    desc: "",
    building: "",
    room: "",
    category: "",
  });

  const handleChange = (input) => {
    const value = input.target.value;
    setEvent({
      ...event,
      [input.target.name]: value,
    });
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
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
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Your Event has been added!
              </Typography>
              <Typography variant="subtitle1">
                We have emailed a confirmation that your event has been added.
                Thank you for using Gather!
              </Typography>
            </React.Fragment>
          ) : (
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
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
