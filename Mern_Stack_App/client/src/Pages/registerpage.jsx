import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { setCurentUser } from '../slices/auth';
import { setError } from "../slices/error";
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container, makeStyles } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterPage() {
  const classes = useStyles();

  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const error = useSelector(state => state.error.message)

  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  if (isAuthenticated) {
    return <Redirect to='/home' />;
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const res = await axios.post('/auth/register', input)
      dispatch(setCurentUser(res.data))
    } catch (err) {
      dispatch(setError(err.response.data.message))

    }

  };

  const passwordsMatch = () => {
    return !input.confirmPassword || input.confirmPassword === input.password;
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {
          error && (
            <div>
              {error}
            </div>
          )
        }
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="username"
                value={input.username}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="username"
                label="username"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={input.password}
                onChange={handleChange}
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={input.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                label="confirmPassword"
                type="password"
                id="confirmPassword"
              />
            </Grid>
          </Grid>
          {!passwordsMatch() && (
            <p>Your passwords don't match</p>
          )}
          <Button
            disabled={
              !input.username
              || !input.password
              || !input.confirmPassword
              || !passwordsMatch()
            }
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}