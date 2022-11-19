import React from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { registerUser } from "../../api";
import { useState } from "react";
import { Link } from "react-router-dom";
import Appbar from "../Appbar/Appbar";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [name, setName] = useState("random");
  const [email, setEmail] = useState("random@gmail.com");
  const [password, setPassword] = useState();
  const [confirmpassword, setconfirmPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password === confirmpassword) {
        const { data } = await registerUser({ name, email, password });
        navigate("/");
          
      } else {
        alert("password doesnt match");
      }
    } catch (error) {
      console.log("Caught" + error);
    }
  };

  return (
    <>
      <Appbar />
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">Signup</Typography>
          <TextField
            name="Name"
            value={name}
            variant="outlined"
            label="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            fullWidth
          />{" "}
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
          <TextField
            name="Confirm Password"
            type="password"
            variant="outlined"
            value={confirmpassword}
            label="Confirm Password"
            onChange={(e) => {
              setconfirmPassword(e.target.value);
            }}
            fullWidth
          />
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="Signup"
            fullWidth
          >
            Signup
          </Button>
          <Link to="/login">
            <Button
              variant="contained"
              color="secondary"
              size="small"
              fullWidth
            >
              Already User ? Login
            </Button>
          </Link>
        </form>
      </Paper>
    </>
  );
};

export default Signup;
