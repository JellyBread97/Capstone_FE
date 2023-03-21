import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useNavigate } from "react-router-dom";
import { saveTokenAction, saveUserAction } from "../redux/actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const resetState = () => {
    setIsSignup(!isSignup);
    setEmail("");
    setName("");
    setPassword("");
  };

  const submitHandler = async () => {
    if (isSignup) {
      const user = { email, password, name };

      try {
        const options = {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(
          `${process.env.REACT_APP_BE_URL}/users/register`,
          options
        );
        if (response.ok) {
          const data = await response.json();
          dispatch(saveUserAction(data.user));
          dispatch(saveTokenAction(data.accessToken));
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const user = { email, password };

      try {
        const options = {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(
          `${process.env.REACT_APP_BE_URL}/users/login`,
          options
        );
        if (response.ok) {
          const data = await response.json();
          dispatch(saveUserAction(data.user));
          dispatch(saveTokenAction(data.accessToken));
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
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
                onChange={(e) => setName(e.target.value)}
                name="name"
                margin="normal"
                type={"text"}
                variant="outlined"
                placeholder="Name"
              />
            )}
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              margin="normal"
              type={"email"}
              variant="outlined"
              placeholder="Email"
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              margin="normal"
              type={"password"}
              variant="outlined"
              placeholder="Password"
            />

            <Button
              endIcon={isSignup ? <HowToRegIcon /> : <LocalBarIcon />}
              onClick={() => submitHandler()}
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
