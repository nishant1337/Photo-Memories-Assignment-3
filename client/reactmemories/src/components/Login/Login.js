import React from "react";
import useStyles from "./styles";
import {  TextField, Button, Typography, Paper } from "@material-ui/core";
import { useState } from "react";
import { loginUser } from "../../api";
import Appbar from "../Appbar/Appbar";
import { useNavigate } from "react-router-dom";

const Login = ({user, setUser, setEmailpost}) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ email, password });
      console.log(data)
      setUser(data.name)
      setEmailpost(data.email)
      navigate("/");

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Appbar></Appbar>
      
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">Login</Typography>
          <TextField
            name="Email"
            type="email"
            value={email}
            variant="outlined"
            label="Email ID"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth
          />
          <TextField
            name="Password"
            type="password"
            variant="outlined"
            value={password}
            label="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth
          />

          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button variant="contained" color="secondary" size="small" fullWidth>
            Reset Password
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Login;
