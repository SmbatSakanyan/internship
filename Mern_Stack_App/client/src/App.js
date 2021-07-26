import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/home_page';
import RegisterPage from './components/registerpage';
import LoginPage from './components/login_page';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { verifyUser } from './actions/auth';


const App = ({ verifyUser }) => {
  useEffect(() => {verifyUser()}, [verifyUser]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default connect(null, { verifyUser })(App);
