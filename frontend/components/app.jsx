import React from "react";
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SplashContainer from './splash/splash_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container'


const App = () => (
  <div>
    <header id='navbar'>
      <AuthRoute path="/" component={NavbarContainer}/>
      {/* <Link to='/' className='header-link'>
        <h1>Nextflix</h1>
      </Link> */}
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute path='/' component={SplashContainer} />
    </Switch>
  </div>
);

export default App;