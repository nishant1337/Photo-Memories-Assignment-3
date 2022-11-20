import React from 'react'
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import memories from "../../images/memories.png";
import { Link } from 'react-router-dom';
const Home = ({ posts, user , email, setEmail }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories 
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
        <div className={classes.btn}>
        { user ?  
          <Typography className={classes.heading} variant="h4" align="center">
            
            Hello {user} 
            
             </Typography> : <> 
        <Link to="/login">
            <Button variant="contained"> Login</Button>
          </Link>
          <Link to="/signup">
            <Button variant="outlined">Sign uP</Button>
          </Link>
           </> } 
         
        </div>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts posts={posts} user={user} email={email}  />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form user={user} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home