import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import AllImages from './AllImages'
import Login from './Login'
import { Switch, Route } from "react-router-dom";

function UnauthenticatedApp(props) {
  const { logIn } = props;
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/login">
          <Login logIn={logIn} title='Log In'/>
        </Route>
        <Route path="/signup">
          <Login logIn={logIn} title='Sign Up'/>
        </Route>
        <Route path="/images">
          <AllImages />
        </Route>
        <Route path="/">
          <AllImages />
        </Route>
      </Switch>
    </div>
  );
}

export default UnauthenticatedApp;
