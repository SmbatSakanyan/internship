import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/home_page';
import RegisterPage from './Pages/registerpage';
import LoginPage from './Pages/login_page';
import { setCurentUser } from './slices/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import MainPage from './Pages/main';
import Dashboard from './Pages/dashboard';


const App = () => {
  useEffect(
    () => {
      lll()
    }
  )

  const dispatch = useDispatch()

  const lll = async () => {
    const res = await axios.get('/auth/verify', { withCredentials: true }).then(res => res.data)
    dispatch(setCurentUser(res))
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
