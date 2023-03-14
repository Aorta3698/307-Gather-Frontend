import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Signup(props) {
  const navigate = useNavigate(); 
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "password")
      setPerson({
        firstName: person["firstName"],
        lastName: person["lastName"],
        email: person["email"],
        password: value,
      });
    else if (name === "email")
      setPerson({
        firstName: person["firstName"],
        lastName: person["lastName"],
        email: value,
        password: person["password"],
      });
    else if (name === "lastName")
      setPerson({
        firstName: person["firstName"],
        lastName: value,
        email: person["email"],
        password: person["password"],
      });
    else
      setPerson({
        firstName: value,
        lastName: person["lastName"],
        email: person["email"],
        password: person["password"],
      });
  }

  function submitForm() {
    console.log("Submit Form Person: " + person);
    props.handleSubmit(person);
    setPerson({ firstname: "", lastname: "", email: "", password: "" });
    navigate("/home");
  }

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://gather-5411b.web.app/">
          Gather
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const theme = createTheme();

  return(
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleChange} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitForm}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/users/signup" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );

  // return (
  //   <form>
  //     <label htmlFor="firstname">First Name</label>
  //     <input
  //       type="text"
  //       name="firstname"
  //       id="firstname"
  //       value={person.firstname}
  //       onChange={handleChange}
  //     />
  //     <label htmlFor="lastname">Last Name</label>
  //     <input
  //       type="text"
  //       name="lastname"
  //       id="lastname"
  //       value={person.lastname}
  //       onChange={handleChange}
  //     />
  //     <label htmlFor="email">Email</label>
  //     <input
  //       type="text"
  //       name="email"
  //       id="email"
  //       value={person.email}
  //       onChange={handleChange}
  //     />
  //     <label htmlFor="password">Password</label>
  //     <input
  //       type="password"
  //       name="password"
  //       id="password"
  //       value={person.password}
  //       onChange={handleChange}
  //     />
  //     <input type="button" value="Submit" onClick={submitForm} />
  //     <li>
  //       <a href="/">Go Back</a>
  //     </li>
  //   </form>
  // );
}
