import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Grid,
  Box,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  IconButton,
  InputAdornment,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LightPurpleButton } from "../components/buttonStyles";
// Utilisation du dossier public pour l'image de droite
import styled from "styled-components";
import Popup from "../components/Popup";

const defaultTheme = createTheme();

const LoginPage = ({ role }) => {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");
  const [currentRole, setCurrentRole] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setCurrentRole(role); // simulate successful login
    }, 1000);
  };

  const guestModeHandler = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setCurrentRole(role); // simulate guest login
    }, 1000);
  };

  // Redirect based on role
  useEffect(() => {
    if (currentRole) {
      if (currentRole === "Admin") navigate("/admin-test");
      if (currentRole === "Student") navigate("/student-test");
      if (currentRole === "Teacher") navigate("/teacher-test");
    }
  }, [currentRole, navigate]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", flexDirection: "row" }}
      >
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" sx={{ mb: 2, color: "#2c2143" }}>
              {role} Login
            </Typography>
            <Typography variant="h7">
              Welcome back! Please enter your details
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 2 }}
            >
              {role === "Student" && (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="rollNumber"
                    label="Enter your Roll Number"
                    name="rollNumber"
                    autoComplete="off"
                    type="number"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="studentName"
                    label="Enter your name"
                    name="studentName"
                    autoComplete="name"
                  />
                </>
              )}
              {role !== "Student" && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Enter your email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={toggle ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setToggle(!toggle)}>
                        {toggle ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Grid
                container
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <StyledLink href="#">Forgot password?</StyledLink>
              </Grid>

              <LightPurpleButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
              >
                {loader ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Login"
                )}
              </LightPurpleButton>

              <Button
                fullWidth
                onClick={guestModeHandler}
                variant="outlined"
                sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
              >
                Login as Guest
              </Button>

              {role === "Admin" && (
                <Grid container>
                  <Grid>Don't have an account?</Grid>
                  <Grid item sx={{ ml: 2 }}>
                    <StyledLink to="/Adminregister">Sign up</StyledLink>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(/designlogin.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="primary" />
        Please Wait
      </Backdrop>

      <Popup
        message={message}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
      />
    </ThemeProvider>
  );
};

export default LoginPage;

const StyledLink = styled(Link)`
  margin-top: 9px;
  text-decoration: none;
  color: #7f56da;
`;
