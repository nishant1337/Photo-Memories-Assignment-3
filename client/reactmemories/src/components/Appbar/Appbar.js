import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import memories from '../../images/memories.png'
import {Link } from 'react-router-dom'
const Appbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.link}>
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
      </Link>
      <img className={classes.image} src={memories} alt="icon" height="60" />
    </AppBar>
  );
};

export default Appbar;
