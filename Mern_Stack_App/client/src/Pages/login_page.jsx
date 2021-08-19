
// import React, { useState, Fragment } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, Redirect } from 'react-router-dom';
// import axios from "axios";
// import { setCurentUser } from '../slices/auth';



// const LoginPage = () => {
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
//   const dispatch = useDispatch();


//   const [input, setInput] = useState({
//     username: '',
//     password: ''
//   });

//   if (isAuthenticated) {
//     return <Redirect to='/' />;
//   }

//   const handleChange = event => {
//     const { name, value } = event.target;
//     setInput({ ...input, [name]: value });
//   };
//   // axios.post("/auth/login",input).then((a)=>console.log(a)).catch(err => console.log(err))

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     try {
//       const res = await axios.post("/auth/login", input).then(res => res)
//       dispatch(setCurentUser(res.data))
//     } catch (err) {
//       console.log(err.response.data.message)
//     }
//   };



//   return (
//     <Fragment>
//       <form onSubmit={handleSubmit}>
//         <input
//           type='text'
//           name='username'
//           value={input.username}
//           onChange={handleChange}
//           placeholder='Username'
//         />
//         <input
//           type='password'
//           name='password'
//           value={input.password}
//           onChange={handleChange}
//           placeholder='Password'

//         />
//         <button
//           type='submit'
//         >
//           Login
//         </button>
//         <Link to={"/register"}>register</Link>
//       </form>
//       <div />
//     </Fragment>
//   );
// };


// export default LoginPage;
import React , {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom';
import axios from "axios";
import { setCurentUser } from '../slices/auth';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://wallpaperaccess.com/full/2690553.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginPage() {
  const classes = useStyles();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();


  const [input, setInput] = useState({
    username: '',
    password: ''
  });

  if (isAuthenticated) {
    return <Redirect to='/home' />;
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  // axios.post("/auth/login",input).then((a)=>console.log(a)).catch(err => console.log(err))

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post("/auth/login", input).then(res => res)
      dispatch(setCurentUser(res.data))
    } catch (err) {
      console.log(err.response.data.message)
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit = {handleSubmit} className={classes.form} noValidate>
            <TextField
            onChange = {handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoFocus
            />
            <TextField
            onChange = {handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}