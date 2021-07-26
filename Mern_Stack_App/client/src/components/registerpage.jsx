import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import { register } from '../actions/auth';
import { clearError } from '../actions/error';


const RegisterPage = ({ isAuthenticated, error, register, clearError }) => {
  useEffect(() => {
    return () => clearError();
  }, [clearError]);
  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: ''
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
    register(input);
  };

  const passwordsMatch = () => {
    return !input.confirmPassword || input.confirmPassword === input.password;
  };

  return (
    <Fragment>
      {
        error.message && (
          <div>
            {error.message}
          </div>
        )
      }
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

        <input
          type='password'
          name='confirmPassword'
          value={input.confirmPassword}
          onChange={handleChange}
          placeholder='Confirm password'
          required
        />
        {!passwordsMatch() && (
          <p>Your passwords don't match</p>
        )}
        <button
          type='submit'
          disabled={
            !input.username
            || !input.password
            || !input.confirmPassword
            || !passwordsMatch()
          }
        >
          Register
        </button>
      </form>
      <div />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { register, clearError })(RegisterPage);