import React, { useState } from "react";
import { Box, Button, Input, TextField, Typography } from "@mui/material";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  const resetState = () => {
    setIsSignup(!isSignup);
    setInputs({ name: "", email: "", password: "" });
  };

  return (
    <div className="login__mainbg">
      <div className="login">
        <form onSubmit={handleSubmit} id="center">
          <Box
            className="login__box"
            display="flex"
            flexDirection={"column"}
            maxWidth={400}
            height={500}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            padding={3}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            <Typography
              className="login__main"
              variant="h2"
              padding={3}
              textAlign="center"
            >
              {isSignup ? "Signup" : "Login"}
            </Typography>
            {isSignup && (
              <TextField
                onChange={handleChange}
                name="name"
                value={inputs.name}
                margin="normal"
                type={"text"}
                variant="outlined"
                placeholder="Name"
              />
            )}
            <TextField
              onChange={handleChange}
              name="email"
              value={inputs.email}
              margin="normal"
              type={"email"}
              variant="outlined"
              placeholder="Email"
            />
            <TextField
              onChange={handleChange}
              name="password"
              value={inputs.password}
              margin="normal"
              type={"password"}
              variant="outlined"
              placeholder="Password"
            />
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                endIcon={isSignup ? <HowToRegIcon /> : <LocalBarIcon />}
                type="submit"
                sx={{
                  marginTop: 2,
                  borderRadius: 3,
                  width: 225,
                }}
                variant="contained"
                color="warning"
              >
                {isSignup ? "Signup" : "Login"}
              </Button>
            </Link>
            <Button
              endIcon={isSignup ? <LocalBarIcon /> : <HowToRegIcon />}
              onClick={resetState}
              sx={{
                marginTop: 2,
                borderRadius: 3,
                width: 225,
              }}
            >
              Change to {isSignup ? "Login" : "Signup"}
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Login;
