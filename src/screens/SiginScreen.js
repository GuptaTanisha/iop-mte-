import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import {Grid,InputLabel,Badge,Select,ListItem,MenuItem} from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import swal from 'sweetalert';
import Header from '../components/Header/Header';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
export default function SigninScreen() {
    const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: sign in action
  };
  return (
    <MuiThemeProvider>
      <CssBaseline />
      <Header home={false} />
       <Paper className={`${classes.root} ${classes.paper}`}>
        <form autoComplete="on" noValidate className={classes.form} >
          <Typography variant="h6"> Book a station</Typography>
          <TextField name="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" fullWidth />
          <TextField name="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" fullWidth />
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit">
            Sign In
          </Button>  
        </form>
        <Typography>
            New customer? <Link className={classes.text} to="/register">Create your account</Link>
          </Typography> 
        </Paper>
      </MuiThemeProvider>
  );
}