
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link} from 'react-router-dom';
import { login } from '../actions/auth';
import { clearError } from '../actions/error';


const LoginPage = ({ isAuthenticated, error, login, clearError }) => {
    

  const [input, setInput] = useState({
    username: '', 
    password: '' 
  });

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(input);
    console.log(isAuthenticated)
  };

  return (
    <Fragment>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            name='username'
            value={input.username}
            onChange={handleChange}
            placeholder='Username'
            />
          <input
            type='password'
            name='password'
            value={input.password}
            onChange={handleChange}
            placeholder='Password'
            
          />
          <button
            type='submit'
          >
            Login
          </button>
          <Link to ={"/register"}>register</Link>
        </form>
      <div />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login, clearError })(LoginPage);